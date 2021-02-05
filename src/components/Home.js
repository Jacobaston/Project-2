import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useEventListener from '@use-it/event-listener'

const enterKey = ['13', 'Enter']



export default function Home({ history }) {
  const [jobFilter, updateJobFilter] = useState('')
  const [locationFilter, updateLocationFilter] = useState('')
  const [hasDescription, updateHasDescription] = useState(true)
  const [hasLocation, updateHasLocation] = useState(true)

  function checkValues(event) {
    if (jobFilter === '' && locationFilter === '') {
      updateHasDescription(false)
      updateHasLocation(false)
      if (event) {
        event.preventDefault()
      }
    } else if (jobFilter === '') {
      updateHasLocation(true)
      updateHasDescription(false)
      if (event) {
        event.preventDefault()
      }
    } else if (locationFilter === '') {
      updateHasDescription(true)
      updateHasLocation(false)
      if (event) {
        event.preventDefault()
      }
    } else {
      history.push(`/project-2/job-list/${locationFilter}/${jobFilter}/1`)
    }
  }

  function handler({ key }) {
    if (enterKey.includes(String(key))) {
      checkValues()
    }
  }

  useEventListener('keydown', handler)


  return <>
    <header>
      <div className="hero is-fullheight-with-navbar is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>SEI JobSearch</h1>
            <h2>Find your perfect job</h2>
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
                <button className="button is-link is-primary is-size-4  has-text-centered is-fullwidth" onClick={(event) => checkValues(event)}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}