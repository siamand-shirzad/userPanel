import { useEffect, useState } from 'react';
import { getPosts } from '../../services/users';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const handleGetPosts = async () => {
		try {
			const data = await getPosts();
			setPosts(data.slice(0, 12));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		handleGetPosts();
	}, []);
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-3xl">پست ها</h1>
				<button>مدیریت پست ها</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{posts.map(post => (
					<div
						key={post.id}
						className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
						<div className="bg-gradient-to-r to-purple-500 from-cyan-500 h-3"></div>
						<div className="p-5">
							<h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-1">{post.title}</h3>
							<p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>
							<div className="flex justify-between items-center">
								<span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
									پست #{post.id}
								</span>
								<button className="text-sm text-white bg-gradient-to-r to-purple-500 from-cyan-500 px-3 py-1 rounded hover:opacity-90 transition">
									ادامه مطلب
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
