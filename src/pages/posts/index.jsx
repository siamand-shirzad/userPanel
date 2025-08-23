import { useEffect, useState } from 'react';
import { deletePostService, getPosts } from '../../services/users';
import PostsSection from './_components/PostsSection';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [toEdit, setToEdit] = useState(false);

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
				<h1 className="font-bold text-3xl">پست ها</h1>
				<button
					className="px-2 py-4 bg-indigo-300 rounded-lg text-sm font-bold"
					onClick={() => setToEdit(toEdit ? false : true)}>
					{toEdit ? 'نمایش پست ها' : 'ویرایش پست ها'}
				</button>
			</div>
			<div className="">
				<PostsSection posts={posts} toEdit={toEdit} handleDelete={handleDelete} />
			</div>
		</div>
	);
};

export default Posts;
