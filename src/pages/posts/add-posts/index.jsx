import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { createPostService, updatePostService } from '../../../services/users';

const AddPost = () => {
	const postToEdit = useLocation().state?.post
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: postToEdit?.title ||'',
		body: postToEdit?.body || ''
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};
	const handleSubmit = async e => {
		e.preventDefault();
		const res = postToEdit? await updatePostService( postToEdit.id, formData) : await createPostService(formData);
		if (res.status === 201 || res.status ===200) {  //status 200 for create and 201 for update
			alert('عملیات با موفقیت انجام شد');
			setFormData({
				title: '',
				body: ''
			});
			navigate(-1);
		}
	};
	return (
		<div className=" flex flex-col items-center justify-center">
			<h1 className='my-4 font-bold text-2xl text-gray-800'>{postToEdit? 'ویرایش پست' :'افزودن پست' }</h1>
			<form
				onSubmit={handleSubmit}
				className="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md">
				<div className="mb-4">
					<label htmlFor="title" className="block text-gray-700 text-lg font-bold mb-2">
						عنوان
					</label>
					<input
						onChange={handleChange}
						name="title"
						placeholder="عنوان را وارد کنید"
						type="text"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-600 "
						// defaultValue={''}
						value={formData.title}
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">
						مطلب
					</label>
					<textarea
						value={formData.body}
						onChange={handleChange}
						name="body"
						rows={5}
						placeholder="محتوا خود را وارد کنید"
						id="body"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-600 "
						// defaultValue={''}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						{postToEdit? 'ویرایش':'ثبت'}
					</button>
					<button onClick={() => navigate(-1)}>بازگشت</button>
				</div>
			</form>
		</div>
	);
};

export default AddPost;
