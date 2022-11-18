import React, { Component } from 'react'
import Contact from './components/contactList'
import SearchBar from './components/searchBar'
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar/>
        <Contact/>
      </div>
    )
  }
}
