import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RingLoader from 'react-spinners/RingLoader'
import Paginate from './Paginate'
import useEventListener from '@use-it/event-listener'

const enterKey = ['13', 'Enter']

function JobList({ match, history }) {

  const [resultsPerPage] = useState(5)
  const [pageNum, updatePageNum] = useState(match.params.page ? match.params.page : 1)
  const [jobs, updateJobs] = useState([])
  const [loading, updateLoading] = useState(true)
  const [jobFilter, updateJobFilter] = useState(match.params.description)
  const [locationFilter, updateLocationFilter] = useState(match.params.location)
  const [hasDescription, updateHasDescription] = useState(true)
  const [hasLocation, updateHasLocation] = useState(true)

  // https://stormy-atoll-29846.herokuapp.com/
  // https://cors-anywhere.herokuapp.com/
  // Fetch's API with props of ID passed throughh the URL to display a unique job post
  // Catch check for any 404 issue with the API and redirects to Error page
  useEffect(() => {
    axios.get(`https://stormy-atoll-29846.herokuapp.com/https://jobs.github.com/positions.json?location=${locationFilter}&description=${jobFilter}`)
      .then(({ data }) => {
        updateJobs(data)
        updateLoading(false)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          history.push('/project-2/error')
        } else if (error.request) {
          console.log(error.request)
        } 
      })
  }, [])

  function handleChange(newValue) {
    updatePageNum(newValue)
  }

  // When search button is clicked or 'enter' key is pressed,
  // check that jobFilter and locationFilter have values
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

  // Allows users to use the 'enter' key to submit their input fields 
  function handler({ key }) {
    if (enterKey.includes(String(key))) {
      checkValues()
    }
  }

  useEventListener('keydown', handler)

  // Loading check if API data has been received - if not loading icon is displayed until data loads
  // If input field hasn't been filled out an on secreen message is displayed propmting the user
  if (loading) {
    return <div className="container has-text-centered mt-6">
      <RingLoader loading={loading} size={80} color={'aqua'} />
    </div>
  } else if (!loading && !jobFilter && !locationFilter) {
    return <div className="section">
      <div className="container">
        {input()}
        <div className='mt-5 mx-3 box notification is-warning'>Please enter some search criteria.</div>
      </div>
    </div>
  } else if (!loading && jobs.length === 0) {
    return <div className="section">
      <div className="container">
        {input()}
        <div className='mt-5 mx-3 box notification is-warning'>
          Sorry, no jobs match your search.</div>
      </div>
    </div>
  }

  // Jobs search bar - allows users to update their job search from the initial search in the home page
  function input() {
    return <div className='mb-2 mx-3 box has-background-info'>
      <div className="columns is-vcentered">
        <div className="column is-centered">
          <input className={hasDescription ? 'input' : 'input is-danger'}
            type="text"
            placeholder="Job Title"
            name='description'
            onChange={(event) => updateJobFilter(event.target.value)}
            value={jobFilter}
          /></div>
        <div className="column">
          <input className={hasLocation ? 'input' : 'input is-danger'}
            type="text"
            placeholder="Location"
            name='location'
            onChange={(event) => updateLocationFilter(event.target.value)}
            value={locationFilter}
          />
        </div>
        <div className="column"> 
          <button className="button is-link is-light float" onClick={(event) => checkValues(event)}>Search</button>
        </div>
      </div>
    </div>
  }

  //Each individual job card displays job title, company name & logo, job location and date posted
  // Each job posting is it own clickable link that takes the user through to more information about the job
  // Pagination added via the paginate component and displayed at the top and bottom of each page
  return <div>
    <div className="section">
      <div className="container">
        {input()}

        <Paginate
          onChange={handleChange}
          pageNum={pageNum}
          totalResults={jobs.length}
          resultsPerPage={resultsPerPage}
          locationFilter={locationFilter}
          jobFilter={jobFilter}
        />

        <div className="rows">

          {jobs.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map(job => {

            const jobDate = new Date(job.created_at)
            return <Link key={job.id} to={{
              pathname: `/project-2/job-detail/${job.id}`,
              state: {
                location: locationFilter,
                decription: jobFilter
              }
            }}>
              <div className="card m-3">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <h2 className="title is-4">
                        {job.title}
                      </h2>
                      <h2 className="subtitle is-5">
                        {job.company}
                      </h2>
                      <h2 className="subtitle is-5">
                        {job.location}
                      </h2>
                      <h2 className="subtitle is-5">
                        Job posted: {jobDate.toLocaleDateString()}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-3by3">
                    <img src={job.company_logo} alt={job.compnay} />
                  </figure>
                </div>
              </div>
            </Link>
          })}
        </div>
        <Paginate
          onChange={handleChange}
          pageNum={pageNum}
          totalResults={jobs.length}
          resultsPerPage={resultsPerPage}
          locationFilter={locationFilter}
          jobFilter={jobFilter}
        />
      </div>
    </div>
  </div >
}

export default JobList