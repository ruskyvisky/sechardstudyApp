import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,  
} from "react-router-dom";
import AddContact from './components/addContact';
import EditContact from './components/editContact';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App/>,
  },
  {
    path : "/addcontact", // I'm trying routing :D 
    element: <AddContact/>
  },
  {
    path : "/:id",
    element : <EditContact/>
  }

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
  <RouterProvider router={router} />
   
  </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
