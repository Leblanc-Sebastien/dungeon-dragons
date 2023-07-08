import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from './Components/ErrorPage/ErrorPage';
import TableCharacters from './Components/TableCharacters/TableCharacters';
import Form from './Components/Form/Form';
import Contact from './Components/Contact/Contact'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/liste-de-personnages",
        element: <TableCharacters />
      },
      {
        path: "/creation-de-personnage",
        element: <Form />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

