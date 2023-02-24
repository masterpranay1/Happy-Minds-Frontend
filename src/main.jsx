import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './pages/Home.page';
import Login from './components/Login'
import Signup from './components/Signup'
import Hero from './components/Hero';
import ChallengePage from './pages/Challenge.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      }
    ],
  },
  {
    path:'/challenge',
    element: <ChallengePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
