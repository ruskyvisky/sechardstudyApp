import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light">
  <div className="container">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    )
  }
}
