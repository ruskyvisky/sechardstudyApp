import React, { Component } from 'react'

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
      
      </tr>
    )
  }
}