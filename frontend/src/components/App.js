import React from "react";

import ContactList from "./contactList";
import { useNavigate } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App(props) {
  const navigate = useNavigate();

  return (
    <div className="container">
       <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" ></ToastContainer>
      <ContactList />
      <button
        className="btn btn-primary"
        onClick={() => navigate("addcontact")}
      >
        Add Contact
      </button>
     
    </div>
  );
}
