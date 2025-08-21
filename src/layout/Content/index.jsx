import { Navigate, Route, Routes } from "react-router";
import Users from "../../pages/users";
import Posts from "../../pages/posts";
import Comments from "../../pages/comments/Comments";
import Tasks from "../../pages/tasks";
import Gallery from "../../pages/gallery";
import AddUserPage from "../../pages/users/add-user";


		const Content = () => (
<div>
		<div className="bg-indigo-50 min-h-screen w-full pr-64 pt-16 top-0 left-0  ">
			<div className="p-4 h-full w-full">
				<Routes>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/users/add" element={<AddUserPage/>}></Route>
					<Route path="/posts" element={<Posts/>}></Route>
					<Route path="/comments" element={<Comments/>}></Route>
					<Route path="/tasks" element={<Tasks/>}></Route>
					<Route path="/gallery" element={<Gallery/>}></Route>
					<Route path="/" element={<Navigate to="/users"/>}></Route>
				</Routes>

			</div>
		</div>
	</div>
);

export default Content;
