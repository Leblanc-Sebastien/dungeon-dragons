import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import CharactersListView from './Components/View/CharactersListView/CharactersListView';
import CreateCharacterView from './Components/View/CreateCharacterView/CreateCharacterView';
import ErrorView from './Components/View/ErrorPageView/ErrorView';
import ContactView from './Components/View/ContactView/ContactView';
import ReactHookForm from './Components/ReactHookForm/ReactHookForm'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/liste-de-personnages",
        element: <CharactersListView />
      },
      {
        path: "/creation-de-personnage",
        element: <CreateCharacterView />
      },
      {
        path: "/contact",
        element: <ContactView />
      },
      {
        path: "HookForm",
        element: < ReactHookForm />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

