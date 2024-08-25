import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)















// import { StrictMode } from 'react';
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './components/custom/Navbar.jsx';
// import LandingPage from './pages/LandingPage.jsx';
// import SingleBlogPage from './pages/SingleBlogPage.jsx';
// import BlogForm from './components/custom/BlogForm.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';


// const router = createBrowserRouter([
//   { path: '/', element: <App /> },
//   { path: '/landing', element: <LandingPage /> },
//   { path: '/blog/:id', element: <SingleBlogPage /> },
//   { path: '/create', element: <BlogForm /> },
//   { path: '/edit/:id', element: <BlogForm /> },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//         <Navbar />
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
//       <RouterProvider router={router}>
//         <App />
//       </RouterProvider>
//     </GoogleOAuthProvider>
//     </BrowserRouter>
//   </StrictMode>
// );
