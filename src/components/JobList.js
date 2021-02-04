import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RingLoader from 'react-spinners/RingLoader'
import Paginate from './Paginate'

function JobList({ match }) {

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
  useEffect(() => {
    axios.get(`https://stormy-atoll-29846.herokuapp.com/https://jobs.github.com/positions.json?location=${locationFilter}&description=${jobFilter}`)
      .then(({ data }) => {
        updateJobs(data)
        updateLoading(false)
        //console.log(`Page: ${pageNum} Description: ${jobFilter} Location: ${locationFilter}`)
        //console.log(data)
      })
  }, [])

  function handleChange(newValue) {
    updatePageNum(newValue)
  }

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
          <Link className="button is-link is-light float" to={`/project-2/job-list/${locationFilter ? locationFilter : ''}/${jobFilter ? jobFilter : ''}`} onClick={(event) => checkValues(event)}>Search</Link>
        </div>
      </div>
    </div>
  }

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