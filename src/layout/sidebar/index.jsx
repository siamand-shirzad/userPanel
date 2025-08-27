import SidebarItem from './SidebarItem';
import Darkmode from '../../components/Darkmode';

const Sidebar = () => {
	return (
		<div className="fixed right-0 top-0 w-64 h-screen ">
			<div className="flex flex-col justify-between  h-full">
				{/* top content */}
				<div className="flex justify-between items-center shadow-md bg-indigo-300 p-2 rounded-t-lg h-16 dark:bg-indigo-900">
					<div>
						<h1>پنل مدیریت</h1>
					</div>
					<div>
						<Darkmode />
					</div>
				</div>
				{/* bottom content */}
				<div className="flex flex-col gap-4 flex-1 p-4 rounded-b-lg bg-indigo-200 dark:bg-indigo-950">
					<ul className="">
						<SidebarItem to="/users">کاربران</SidebarItem>
						<SidebarItem to="/posts">پست ها</SidebarItem>
						<SidebarItem to="/comments">کامنت ها</SidebarItem>
						<SidebarItem to="/tasks">تسک ها</SidebarItem>
						<SidebarItem to="/gallery">گالری</SidebarItem>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
