import React from "react";

import ContactList from "./contactList";
import { useNavigate } from "react-router-dom";

export default function App(props) {
  const navigate = useNavigate();

  return (
    <div className="container">
     
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
