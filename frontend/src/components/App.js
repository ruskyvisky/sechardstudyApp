import React from "react";
import SearchBar from "./searchBar";
import ContactList from "./contactList";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <SearchBar />
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
