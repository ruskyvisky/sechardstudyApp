import React, { Component } from 'react'
import Contact from "./contact"
import axios from "axios"
export default class ContactList extends Component {
 constructor(props){ 
    super(props)
    this.state = {
        contacts : []
    }
    

 }
 componentDidMount() {  
        fetch("/contacts") // apiden fetch ediyorum.
        .then(res=> res.json().then(data => {
            this.setState({
                contacts : data
            })
        })
        
        )
}

delContact =  (contact) => { // DELETE METHOD APİ CALLS
  console.log(contact)
  axios.delete(`http://localhost:5000/contacts/${contact}`)
  const newContact = this.state.contacts.filter(
     (contactss) => contactss.id !== contact
   );
   this.setState({
    contacts: newContact,
   });
}
    render() {
   const {contacts} = this.state; 
    return (
        <table className="table">
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
          
            contacts.map((contact,i) =>{
                const {id,name,address,phone,mobile_phone,email} = contact;
                return (
                  <tr key={i}>  
                          <td>{name}</td>
                          <td>{address}</td>
                          <td>{phone}</td>
                          <td>{mobile_phone}</td>
                          <td>{email}</td>
                          <td>
                         {/* <DeleteButton /> */}
                         <button className='btn btn-danger ' type='button' onClick={()=>{this.delContact(id)}} > Delete</button>
                          </td>
                          <td>
                      
                          </td>
                        </tr>
                        
                          
                          
                      
                    
                  )
                
            })
         }
         
        </tbody>
      </table>
    )
  }
}
