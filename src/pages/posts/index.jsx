import { useEffect, useState } from 'react';
import { deletePostService, getPosts } from '../../services/users';
import PostsSection from './_components/PostsSection';
import {  FaRegEdit } from 'react-icons/fa';

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
	const handleDelete = async id => {
		const res = await deletePostService(id);
		if (res.status === 200) {
			console.log(res.status);
			alert('عملیات با موفقیت انجام شد');
			setPosts(posts.filter(post => post.id !== id));
		}
	};
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-2xl">ویرایش پست</h1>
				<button
					className=" bg-indigo-500  flex items-center gap-2 text-white p-2  hover:bg-indigo-700 transition-colors duration-150 rounded text-sm "
					>
					<FaRegEdit />
					<span>ویرایش</span>
				</button>
			</div>
			<div className="">
				<PostsSection posts={posts}  handleDelete={handleDelete} />
			</div>
		</div>
	);
};

export default Posts;
