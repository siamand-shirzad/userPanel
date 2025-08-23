import { MdDeleteForever, MdEdit } from "react-icons/md";

const PostsSection = ({ posts, toEdit, handleDelete }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
			{posts.map(post => (
				<div key={post.id} className="relative group ">
					{toEdit && (
						<div className="absolute z-10 inset-0  bg-black/80  rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-1000 flex items-center justify-center gap-8">
							<div className="p-2 rounded-full opacity-50 ring-black ring-4 hover:scale-125 transition-all duration-300 hover:opacity-100" ><MdEdit className="text-4xl text-black" /></div>
							<button onClick={()=>handleDelete(post.id)} className="p-2 rounded-full ring-4 ring-red-500 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-125 cursor-pointer"><MdDeleteForever className="text-4xl text-red-500" /></button>
						</div>
					)}{' '}
					<div className="bg-white  border border-gray-200 rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300  ">
						<div className="bg-gradient-to-r to-purple-500 from-cyan-600 h-3"></div>
						<div className="p-5">
							<h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-1">{post.title}</h3>
							<p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>
							<div className="flex justify-between items-center">
								<span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
									پست #{post.id}
								</span>
								<button className="text-sm text-white bg-gradient-to-r to-purple-500 from-cyan-600 px-3 py-1 rounded hover:opacity-90 transition">
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
