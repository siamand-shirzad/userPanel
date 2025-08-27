import React from 'react';
import { NavLink } from 'react-router';

const SidebarItem = ({ to, children }) => {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) =>
					`p-2 rounded hover:bg-blue-100 dark:hover:bg-indigo-800 block ${isActive ? 'bg-indigo-300 dark:bg-indigo-900' : null}`
				}>
				{children}
			</NavLink>
		</li>
	);
};

export default SidebarItem;
