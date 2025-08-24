import { useState } from 'react';
import Tooltip from './Tooltip';

const PostsSection = ({ posts, handleDelete }) => {
	const [hovered, setHovered] = useState(false)
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
			{posts.map(post => (
				<div key={post.id} className="relative  ">
					<div onMouseEnter={()=>setHovered(true)} onMouseLeave={() => setHovered(false) } className="absolute right-2 top-2 scale-60 hover:scale-100 transition-all duration-300 z-50 ">
						<Tooltip handleDelete={handleDelete} id={post.id} />
					</div>
					<div className={`bg-indigo-50 relative  border border-gray-200 rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300  `}>
						<div className={`absolute  right-5 top-5  h-1 w-1  rounded opacity-0 invisible transition-all duration-1000 bg-black/60 ${hovered ? 'scale-[250]    visible opacity-100 ': null} `}></div>
						<div className="bg-gradient-to-r from-violet-600 to-indigo-500 h-3"></div>
						<div className="p-8">
							<h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-1">{post.title}</h3>
							<p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>
							<div className="flex justify-between items-center">
								<span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
									پست #{post.id}
								</span>
								<button className="text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-500 px-3 py-1 rounded hover:opacity-90 transition">
									ادامه مطلب
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostsSection;
