import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Resume from './Resume.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/resume",
    element: <Resume/>,
  },
  {
    path: "/project",
    element: <Project/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);