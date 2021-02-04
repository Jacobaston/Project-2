import React from 'react'
import { Link } from 'react-router-dom'

function Congratulations({ location }) {

  const pass = location.state

  const style = {
    width: '200px'
  }

  return <div className="content has-text-centered mt-6">
    <img src={pass.logo} style={style}/>
    <h1>Congratulations for applying at {pass.company} for the {pass.title} role</h1>
    <p>Plase keep an eye on your inbox for any updates in regard to your application</p>
    <p>Click return to continue your job search</p>
    <button className="button is-link is-primary">
      <Link to={`/project-2/job-list/${pass.location}/${pass.decription}`}>Return</Link>
    </button>
  </div>
}

export default Congratulations