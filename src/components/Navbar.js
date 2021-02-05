import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/SEI.png'

export default function Navbar() {

  return <div className="navbar has-background-black-bis">
    <div className="navbar-item">
      <Link to={'/project-2'}><img src={logo} /></Link>
    </div>
  </div>
}