import React from 'react';
import { NavLink } from 'react-router';

const SidebarItem = ({ to, children }) => {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) =>
					`p-2 rounded hover:bg-blue-100 block ${isActive ? 'bg-indigo-300' : null}`
				}>
				{children}
			</NavLink>
		</li>
	);
};

export default SidebarItem;
