import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RingLoader from 'react-spinners/RingLoader'
import { Link } from 'react-router-dom'

function JobDetail({ match, location }) {
  const id = match.params.id
  const pass = location.state

  const [job, updatejob] = useState({})
  const [loading, updateLoading] = useState(true)

  const jobDate = new Date(job.created_at)

  // https://stormy-atoll-29846.herokuapp.com/
  // https://cors-anywhere.herokuapp.com/
  useEffect(() => {
    axios.get(`https://stormy-atoll-29846.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
      .then(({ data }) => {
        updatejob(data)
        updateLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="container has-text-centered mt-6">
      <RingLoader loading={loading} size={80} color={'aqua'} />
    </div>
  }

  return <div className="section">
    <div className="container">
      <div className="rows">
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
                <div dangerouslySetInnerHTML={{ __html: job.description }}>
                </div>
              </div>
            </div>
          </div>
          <div className="card-image">
            <figure className="image is-3by3">
              <img src={job.company_logo} alt={job.compnay} />
            </figure>
          </div>
          <div className="ml-5" dangerouslySetInnerHTML={{ __html: job.how_to_apply }}>
          </div>
          <div>
            <p className="ml-5 mb-2"><strong>Or apply below with us..</strong></p>
            <button className="button is-link is-success is-large ml-5 mt-2 mb-5">
              <Link to={{
                pathname: '/project-2/congratulations',
                state: {
                  company: job.company,
                  location: job.location,
                  title: job.title,
                  decription: pass.decription,
                  logo: job.company_logo
                }
              }}>
                Apply Here
              </Link>
            </button>
          </div>
          <div>
            <button className="button is-link is-primary ml-5 mb-5">
              <Link to={`/project-2/job-list/${pass.location}/${pass.decription}`}>Return</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default JobDetail