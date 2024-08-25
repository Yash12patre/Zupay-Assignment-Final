import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Navbar from './components/custom/Navbar'
import Home from './pages/Home'
import BlogForm from './components/custom/BlogForm'
import SingleBlogPage from './pages/SingleBlogPage'
import LandingPage from './pages/LandingPage'
import useUserStore from './store';

function App() {
  const {setUser} = useUserStore()
  useEffect(()=>{
    const user = localStorage.getItem('user')
    if(user) setUser(user)
  }, [])
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/blog/:id' element={<SingleBlogPage />} />
          <Route path='/create' element={<BlogForm />} />
          <Route path='/edit/:id' element={<BlogForm />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;
