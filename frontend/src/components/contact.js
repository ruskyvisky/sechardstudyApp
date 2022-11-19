import React, { Component } from 'react'
import DeleteButton from './deleteButton';
import UptadeButton from './uptadeButton';
export default class Contact extends Component {
  render() {
    const {name,address,phone,mobile_phone,email} = this.props;
    return (
        
<tr>  
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{mobile_phone}</td>
        <td>{email}</td>
        <td>
       <DeleteButton/>
     
        </td>
        <td>
        <UptadeButton/>
        </td>
      </tr>
      
        
        
    )
  }
}
