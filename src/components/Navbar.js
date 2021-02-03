import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div className="navbar has-background-black-bis">
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <Link to={'/'}><img src="./images/logo.png"></img></Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="px-2">
            <Link to={'/'}>Home</Link>
          </div>
          <div className="px-3">
            <Link to={'/characters'}>Characters</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}