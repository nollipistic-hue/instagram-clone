import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../components/Post';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  if (!currentUser && !user) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  const profileUser = currentUser || user;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex items-center gap-8 mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-5xl">👤</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{profileUser?.username}</h1>
              <p className="text-gray-600 mb-4">{profileUser?.email}</p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-gray-600">Posts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1.2K</p>
                  <p className="text-gray-600">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">234</p>
                  <p className="text-gray-600">Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-300 aspect-square rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
