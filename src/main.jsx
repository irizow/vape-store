import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "juices",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "accessories",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "mods",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "pod systems",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
