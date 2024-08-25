import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { getUserProfile } from '@/utils/Auth/fetchUser';
import { useNavigate } from "react-router-dom";
import useUserStore from '@/store'


function Navbar() {
  const {user, fetchUser, deleteUser} = useUserStore()
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/landing')
    } else {
      navigate('/')
    }
  }, [user]);

  const handleProfileSuccess = async (token) => {
    await fetchUser(token)
  };

  const login = useGoogleLogin({
    onSuccess: (token) => handleProfileSuccess(token),
    onError: (error) => console.log(error),
  });

  const handleSignOut = () => {
    deleteUser()
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white flex items-center">
          <img src="/logo.svg" alt="Blog App Logo" className="mr-2" />
          Blog App
        </Link>
        <div className="flex space-x-4">
          {!user ? (
            <button onClick={login} className="text-lg text-white hover:text-gray-200">
              Sign In
            </button>
          ) : (
            <>
              <Link to="/landing" className="text-lg text-white hover:text-gray-200">
                All Blogs
              </Link>
              <Link to="/create" className="text-lg text-white hover:text-gray-200">
                Create Blog
              </Link>
              <button
                onClick={handleSignOut}
                className="text-lg text-white hover:text-gray-200">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
