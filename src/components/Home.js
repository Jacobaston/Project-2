import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [jobFilter, updateJobFilter] = useState('')
  const [locationFilter, updateLocationFilter] = useState('')

  function checkValues(event){
    if (jobFilter === '' || locationFilter === ''){
      alert('Please enter a job role and a location')
      event.preventDefault()
    }
  }
  return <>
    <header>
      <div className="hero is-fullheight-with-navbar is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src='https://i.ibb.co/99cdxMy/github-jobs.png' alt='GitHub Jobs' className='pb-5' />
            <div className="field has-text-centered pb-2"> 
              <div className="control">
                <input className="input is-size-4 has-text-centered"
                  type="text"
                  placeholder="Job Title"
                  name='description'
                  onChange={(event) => updateJobFilter(event.target.value)}
                  value={jobFilter}
                />
              </div>
            </div>
            <div className="field has-text-centered pb-2"> 
              <div className="control">
                <input className="input is-size-4 has-text-centered"
                  type="text"
                  placeholder="Location"
                  name='location'
                  onChange={(event) => updateLocationFilter(event.target.value)}
                  value={locationFilter}
                />
              </div>
            </div>
            <div className="field is-fullwidth">
              <div className="control is-fullwidth">
                <button className="button is-link is-primary is-size-4  has-text-centered is-fullwidth">
                  <Link to={`/project-2/job-list/${locationFilter}/${jobFilter}/1`} onClick={(event) => checkValues(event)}>Search</Link>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  </>
}