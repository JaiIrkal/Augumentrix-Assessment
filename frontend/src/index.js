import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import Home from './Home';
import UpdatePost from './UpdatePost';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Your main component
  },
  {
    path: '/addpost',
    element: <CreatePostForm />, // Component to add a new post
  },
  {
    path: '/post/:id',
    element: <Post />, // Component to view a specific post
  },
  {
    path: '/edit/:id',
    element: <UpdatePost />, // Component to view a specific post
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
