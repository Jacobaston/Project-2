import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return <div className="navbar has-background-black-bis">
    <div className="navbar-item">
      <Link to={'/project-2'}><img src="./images/github-logo.png" /></Link>
    </div>
  </div>
}