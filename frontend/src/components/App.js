import React from 'react'
import SearchBar from './searchBar'
import ContactList from './contactList'
import AddContact from './addContact'



export default function App() {
  return (
    <div className='container'>

      
    <SearchBar/>
    <ContactList/>
    <AddContact></AddContact>
  </div>
  )
}
