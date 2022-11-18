import React, { Component } from 'react'
import Contact from "./contact"
export default class ContactList extends Component {
 constructor(props){ 
    super(props)
    this.state = {
        contacts : []
    }
    

 }
 componentDidMount() {  
        fetch("/api/contacts")
        .then(res=> res.json().then(data => {
            this.setState({
                contacts : data
            })
        })
        
        )
}
    render() {
   const {contacts} = this.state; 
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address </th>
            <th scope="col">Phone</th>
            <th scope="col">Mobile Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
         {
            contacts.map(contact =>{
                const {id,name,address,phone,mobile_phone,email} = contact;
                return <Contact
                key={id}
                name = {name}
                address = {address}
                phone = {phone}
                mobile_phone = {mobile_phone}
                email = {email}
                />
            })
         }
          
        </tbody>
      </table>
    )
  }
}
