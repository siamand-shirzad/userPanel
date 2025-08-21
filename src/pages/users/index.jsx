import { useEffect, useState } from 'react';
import { getUsers } from '../../services/users';
import {  FaUserPlus } from 'react-icons/fa';
import UsersTable from './_components/UsersTable';
import { Link } from 'react-router';

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
				<Link to="/users/add" className='bg-blue-400 rounded flex items-center gap-2 text-white p-2 hover:cursor-pointer hover:bg-blue-500'>
					<FaUserPlus/>
					<span>افزودن کابر</span>
				</Link>
			</div>
			<UsersTable users={users}/>

		</div>
	);
};

export default Users;
