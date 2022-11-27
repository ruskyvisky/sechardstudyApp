import React, { Component } from 'react'
import Contact from "./contact"
import axios from "axios"
import SearchBar from './searchBar'
import EditContact from './editContact'

export default class ContactList extends Component {


 constructor(props){ 
    super(props)
    this.state = {
        contacts : [],
        searchQuery : "",
       
    }
    

 }
  async componentDidMount()  {  
    await  this.getContact()
}
async componentDidUpdate(){
  await  this.getContact()
}




searchContact = (e) => {
  this.setState({ searchQuery: e.target.value });
};

delContact =   async (contact)  => { // DELETE METHOD APİ CALLS
  console.log(contact)
  await axios.delete(`http://localhost:5000/api/${contact}`)
  const newContact = this.state.contacts.filter(
     (contactss) => contactss.id !== contact
   );
   this.setState({
    contacts: newContact,
   });
}

getContact = async ()=>{
  await   fetch("/api") // apiden fetch ediyorum.
        .then(res=> res.json().then(data => {
            this.setState({
                contacts : data
            })
        })
        
        )
}
    render() {
    
   let filteredContact = this.state.contacts.filter(
    (contact) => {
    return (
      contact.name
        .toLowerCase()
        .indexOf(this.state.searchQuery.toLowerCase()) !== -1 || 
        contact.address
        .toLowerCase()
        .indexOf(this.state.searchQuery.toLowerCase()) !== -1  ||
        contact.phone
        .toString()
        .indexOf(this.state.searchQuery) !== -1 || 
        contact.email
        .toLowerCase()
        .indexOf(this.state.searchQuery.toLowerCase()) !== -1 
        
      
    );
  });
    return (
<div className="container ">
  <div className="row">
    <div className="col">
    <SearchBar
  searchContactProp={this.searchContact}
  ></SearchBar>
    </div>
    <div className="col"></div>
  </div>
 

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
          filteredContact.map((contact,i) =>{
                const {id,name,address,phone,mobile_phone,email} = contact;
                return <Contact
                key={i}
                id = {id}
                name = {name}
                address = {address}
                phone = {phone}
                mobile_phone = {mobile_phone }
                email = {email}
                delContactProp= {this.delContact}
                getContactProp= {this.getContact}
                />
                
            })

          
         }
         
        </tbody>
      </table>
     
      </div>
    )
  }
}

