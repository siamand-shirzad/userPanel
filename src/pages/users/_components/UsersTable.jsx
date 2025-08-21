import { FaEdit, FaTrash } from "react-icons/fa";

const UsersTable = ({users}) => {
	return (
		<div className="flex items-center justify-center rounded-2xl overflow-hidden">
			<table className="table-auto text-sm w-full text-center">
				<thead className="bg-blue-400">
					<tr>
						<th className="px-4 py-2">#</th>
						<th className="px-4 py-2">نام</th>
						<th className="px-4 py-2">ایمیل</th>
						<th className="px-4 py-2">شماره تلفن</th>
						<th className="px-4 py-2">وبسایت</th>
						<th className="px-4 py-2">عملیات</th>
					</tr>
				</thead>
				<tbody className="bg-gray-200">
					{users.map(user => (
						<tr key={user.id} className="border-b">
							<td className="px-4 py-2">{user.id}</td>
							<td className="px-4 py-2">{user.name}</td>
							<td className="px-4 py-2">{user.email}</td>
							<td className="px-4 py-2">{user.phone}</td>
							<td className="px-4 py-2">{user.website}</td>
							<td className="px-4 py-2 flex gap-2 ">
								<button className="bg-blue-400 text-white rounded p-4 py-2 flex items-center ">
									<FaEdit />
								</button>
								<button className="bg-red-400 text-white rounded p-4 py-2 flex items-center">
									<FaTrash />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
