import React, { Component } from 'react'

export default class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}></form>
        <nav className="navbar bg-light">
  <div className="container">
    <form className="d-flex" role="search">
      <input onChange={this.props.searchContactProp} className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
     
    </form>
  </div>
</nav>
      </div>
    )
  }
}
