import React from 'react'
import SearchBar from './components/searchBar'
import ContactList from './components/contactList'
import AddContact from './components/addContact'



export default function App() {
  return (
    <div className='container'>

      
    <SearchBar/>
    <ContactList/>
    <AddContact></AddContact>
  </div>
  )
}
