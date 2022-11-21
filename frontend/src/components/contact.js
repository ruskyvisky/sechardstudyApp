import React from 'react'
import DeleteButton from './deleteButton';
import UptadeButton from './uptadeButton';
import axios from 'axios';




export default function contact(props) {

  
 
  const {id,name,address,phone,mobile_phone,email} = props;
  return (
  
          
  <tr>  
          
          <td>{name}</td>
          <td>{address}</td>
          <td>{phone}</td>
          <td>{mobile_phone}</td>
          <td>{email}</td>
         
          <td>
         {/* <DeleteButton /> */}
         <button className='btn btn-danger ' type='button' onClick={console.log(id)} > Delete</button>
          </td>
          <td>
          <UptadeButton/>
          </td>
        </tr>
        
          
          
      
    
  )
}



