import { useEffect, useState } from 'react';
import { getUsers } from '../../services/users';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';

const Users = () => {
	const [users, setUsers] = useState([]);

	const handleGetUsers = async () => {
		try {
			const data = await getUsers();
			setUsers(data || []);      
		} catch (error) {
			console.log(error);
		}
	};
  useEffect(()=>{
    handleGetUsers()
  },[])
	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h1 className="font-bold text-2xl">مدیریت کاربران</h1>
				<button className='bg-blue-400 rounded flex items-center gap-2 text-white p-2 hover:cursor-pointer hover:bg-blue-500'>
					<FaUserPlus/>
					<span>افزودن کابر</span>
				</button>
			</div>
			<div className='flex items-center justify-center rounded-2xl overflow-hidden'>
				<table className='table-auto text-sm w-full text-center'>
					<thead className='bg-blue-400'>
						<tr>
							<th className='px-4 py-2'>#</th>
							<th className='px-4 py-2'>نام</th>
							<th className='px-4 py-2'>ایمیل</th>
							<th className='px-4 py-2'>شماره	تلفن</th>
							<th className='px-4 py-2'>وبسایت</th>
							<th className='px-4 py-2'>عملیات</th>
						</tr>
					</thead>
					<tbody className='bg-gray-200'>
						{users.map((user)=>(
							<tr key={user.id} className='border-b'>
								<td className='px-4 py-2'>{user.id}</td>
								<td className='px-4 py-2'>{user.name}</td>
								<td className='px-4 py-2'>{user.email}</td>
								<td className='px-4 py-2'>{user.phone}</td>
								<td className='px-4 py-2'>{user.website}</td>
								<td className='px-4 py-2 flex gap-2 '>
									<button className='bg-blue-400 text-white rounded p-4 py-2 flex items-center '><FaEdit/></button>
									<button className='bg-red-400 text-white rounded p-4 py-2 flex items-center'><FaTrash/></button>
								</td>


							</tr>
						))}

					</tbody>

				</table>
			</div>
		</div>
	);
};

export default Users;
