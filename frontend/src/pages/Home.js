import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, createPost } from '../redux/actions/postActions';
import Post from '../components/Post';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (caption && image) {
      dispatch(createPost(caption, image));
      setCaption('');
      setImage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-8 px-4">
        {user && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Create Post</h2>
            <form onSubmit={handleCreatePost}>
              <textarea
                placeholder="What's on your mind?"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full border border-gray-300 rounded p-3 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border border-gray-300 rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
              >
                Post
              </button>
            </form>
          </div>
        )}

        {loading ? (
          <div className="text-center text-gray-500">Loading posts...</div>
        ) : posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Post key={post._id} post={post} isOwner={user?._id === post.author?._id} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No posts yet. Start following people!</div>
        )}
      </div>
    </div>
  );
};

export default Home;
