import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from '@react-oauth/google';
import { getUserProfile } from '@/utils/Auth/fetchUser';
import { useNavigate } from "react-router-dom";
import useUserStore from '@/store';


const Home = () => {
  const [openDailog, setOpenDailog] = useState(false);
  const navigate = useNavigate();
  const {user, fetchUser} = useUserStore()


  const handleProfileSuccess = (token) => {
    fetchUser(token)
    navigate('/landing');
    console.log("User found in local storage:", JSON.parse(user));
  };
  
  const login = useGoogleLogin({
    onSuccess: (token) => handleProfileSuccess(token),
    onError: (error) => console.log(error),
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold text-gray-800">Welcome to The Blog</h1>
      <p className="text-xl text-gray-600 mt-4 text-center max-w-2xl">
        Dive into a world of knowledge, inspiration, and ideas. Whether you're here to learn, share, or explore, our blog is your perfect companion on this journey.
      </p>
      <div className='mt-5'>
        <Button onClick={() => setOpenDailog(true)}>Get Started</Button>
      </div>

      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
              <p>Sign in to the App with Google's secure authentication</p>
              <Button 
                onClick={login}
                className="w-full mt-5" >
                <FcGoogle className='h-7 w-7' />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;



