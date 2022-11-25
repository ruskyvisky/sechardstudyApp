import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
export default function Contact(props) {
  
  const { id, name, address, phone, mobile_phone, email } = props;
const uptadeContact =  (contact) =>{
  axios.put(`http://localhost:5000/api/${contact}`)
  console.log(contact)
}
  const navigate = useNavigate();
  
  return (
    
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{mobile_phone}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-danger "
          type="button"
          onClick={(event) => {
            props.delContactProp(id);
          }}
        >
          {" "}
          Delete
        </button>
      </td>
      <td>
        <button
        
          className="btn btn-success"
          type="button"
        >
          Uptade
        </button>
        
      </td>
    </tr>
  );
}
