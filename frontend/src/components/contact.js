import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Contact(props) {
  
  const { id, name, address, phone, mobile_phone, email } = props;

  const navigate = useNavigate();
 
  return (
    
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone || "deneme"}</td>
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
      
          Delete
        </button>
      </td>
      <td>
        <button
        id = {id}
        name = {name}
        address = {address}
        phone = {phone}
        mobile_phone = {mobile_phone }
        email = {email}
          className="btn btn-success"
          type="button"
          onClick={(event)=>{
           navigate(`/${id}`)

          }}
        >
          Uptade
        </button>
        
      </td>
    </tr>
  );
}
