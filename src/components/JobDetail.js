import React, { useEffect, useState } from 'react'
import axios from 'axios'

function JobDetail({ match }) {
  const id = match.params.id

  const [job, updatejob] = useState({})

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/job/${id}`)
      .then(({ data }) => {
        updatejob(data)
      })
  }, [])

  if (!job.id) {
    return null
  }

  return <div>
    <div>
      <h1 className="title has-text-centered">{job.name}</h1>
    </div>
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by2">
          <img src={job.image} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className="subtitle is-5">
              <div>Name: {job.name}</div>
              <div>Species: {job.species}</div>
              <div>Gender: {job.gender}</div>
              <div className="is-capitalized">Origin: {job.origin.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default JobDetail