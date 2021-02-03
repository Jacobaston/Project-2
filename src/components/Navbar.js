import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div className="navbar has-background-black-bis">
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <Link to={'/project-2'}>Logo</Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="px-2">
            <Link to={'/project-2'}>Home</Link>
          </div> 
        </div>
        <div className="navbar-item">
          <div className="px-2">
            <Link to={'/project-2/job-list'}>Jobs List</Link>
          </div> 
        </div>
      </div>
    </div>
  </div>
}