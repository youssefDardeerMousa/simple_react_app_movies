import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h2>noxe</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/Home">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/Gallary">Gallary</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Functionn">Functionn</NavLink>
        </li> */}
      </ul>

    </div>
  </div>
</nav>

      </>
    )
  }
}
