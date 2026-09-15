import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/postActions';

const Post = ({ post, isOwner }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deletePost(post._id));
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 max-w-md mx-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{post.author?.username}</p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
          {isOwner && (
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      <img src={post.image} alt="Post" className="w-full object-cover max-h-96" />

      <div className="p-4">
        <p className="font-semibold mb-2">{post.author?.username}</p>
        <p className="text-gray-800">{post.caption}</p>
        <p className="text-sm text-gray-500 mt-2">❤️ {post.likes?.length || 0} likes</p>
        <p className="text-sm text-gray-500">💬 {post.comments?.length || 0} comments</p>
      </div>
    </div>
  );
};

export default Post;
