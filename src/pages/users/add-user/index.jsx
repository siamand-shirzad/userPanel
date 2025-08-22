import { useState, useRef, useEffect } from 'react';
import { createUserService, updateUserService } from '../../../services/users';
import { useLocation, useNavigate } from 'react-router';

export default function AddUserPage() {
  const navigate = useNavigate();
  const location = useLocation()
  const userToEdit = location.state?.user

  const fields = [
    { name: 'name', label: 'نام', type: 'text', placeholder: 'نام خود را وارد کنید', required: true },
    { name: 'email', label: 'ایمیل', type: 'email', placeholder: 'ایمیل خود را وارد کنید', required: true },
    { name: 'phone', label: 'شماره موبایل', type: 'tel', placeholder: 'شماره موبایل خود را وارد کنید', required: true },
    { name: 'website', label: 'وب سایت', type: '', placeholder: 'وبسایت خود را وارد کنید' },
  ];

  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: userToEdit?.[field.name] || '' }), {})
  );

  const [errors, setErrors] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const refs = useRef(fields.map(() => null));

  useEffect(() => {
  if (refs.current[0]) {
    refs.current[0].focus();
  }
}, []);
  
  // ولیدیشن ساده بر اساس نوع و نیاز بودن فیلد
  const validateField = (name, value) => {
    let error = '';
    if (!value && fields.find(f => f.name === name)?.required) {
      error = 'این فیلد الزامی است';
    } else if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      error = 'ایمیل معتبر نیست';
    } else if (name === 'phone' && value && !/^\d{10,11}$/.test(value)) {
      error = 'شماره موبایل معتبر نیست';
    }
    return error;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // ولیدیشن زنده
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < refs.current.length) {
        refs.current[nextIndex].focus();
      } else {
        // وقتی آخرین فیلد هست، اگر ولیدیشن OK → Submit
        const formValid = Object.values(errors).every(err => err === '') &&
                          Object.values(formData).every((v, i) => !fields[i].required || v.trim() !== '');
        if (formValid) {
          handleSubmit(e);
        } else {
          alert('لطفا خطاها را برطرف کنید');
        }
      }
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // چک نهایی قبل از ارسال
    let newErrors = {};
    fields.forEach(f => {
      newErrors[f.name] = validateField(f.name, formData[f.name]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every(err => err === '')) {
      const res = userToEdit? await updateUserService(userToEdit.id,formData) : await createUserService(formData);
      if (res.status === 201 || res.status === 200) {
        console.log(res);
        console.log(res.status);
        
        alert('User added successfully!');
        setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
        navigate(-1);
      }
    } else {
      alert('لطفا خطاها را برطرف کنید');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">{userToEdit ? "ویرایش کاربر ":"افزودن کاربر"}</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        {fields.map((field, i) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block text-gray-700 font-medium mb-2">
              {field.label}
            </label>
            <input
              ref={el => refs.current[i] = el}
              {...(field.required && { required: true })}
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors[field.name]
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder={field.placeholder}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md">
            {userToEdit ? "ویرایش":"ثبت"}
          </button>
        </div>
      </form>
    </div>
  );
}