import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [jobFilter, updateJobFilter] = useState('')
  const [locationFilter, updateLocationFilter] = useState('')
  const [hasDescription, updateHasDescription] = useState(true)
  const [hasLocation, updateHasLocation] = useState(true)

  function checkValues(event) {
    if (jobFilter === '' && locationFilter === '') {
      updateHasDescription(false)
      updateHasLocation(false)
      event.preventDefault()
    } else if (jobFilter === '') {
      updateHasLocation(true)
      updateHasDescription(false)
      event.preventDefault()
    } else if (locationFilter === '') {
      updateHasDescription(true)
      updateHasLocation(false)
      event.preventDefault()
    }
  }
  return <>
    <header>
      <div className="hero is-fullheight-with-navbar is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src='./images/github-jobs.png' alt='GitHub Jobs' className='pb-5' />
            <div className="field has-text-centered pb-2">
              <div className="control">
                <input className={hasDescription ? 'input is-size-4 has-text-centered' : 'input is-size-4 has-text-centered input is-danger'}
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
                <input className={hasLocation ? 'input is-size-4 has-text-centered' : 'input is-size-4 has-text-centered input is-danger'}
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
                <Link className="button is-link is-primary is-size-4  has-text-centered is-fullwidth" to={`/project-2/job-list/${locationFilter}/${jobFilter}/1`} onClick={(event) => checkValues(event)}>Search</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  </>
}