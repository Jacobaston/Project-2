import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [jobFilter, updateJobFilter] = useState('')
  const [locationFilter, updateLocationFilter] = useState('')

  return <>
    <header>
      <div className="hero is-fullheight-with-navbar is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Job Search</h1>
            <h3 className="subtitle is-size-3">Find your perfect job</h3>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className="field has-text-centered">
        <label className="label">Name</label>
        <div className="control">
          <input className="input"
            type="text"
            placeholder="Job Title"
            name='description'
            onChange={(event) => updateJobFilter(event.target.value)}
            value={jobFilter}
          />
        </div>
      </div>
      <div className="field has-text-centered">
        <label className="label">Location</label>
        <div className="control">
          <input className="input"
            type="text"
            placeholder="Location"
            name='location'
            onChange={(event) => updateLocationFilter(event.target.value)}
            value={locationFilter}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link is-light">
            <Link to={`/project-2/job-list/location=${locationFilter}`}>Search</Link>
          </button>
        </div>
      </div>
    </main>
  </>
}