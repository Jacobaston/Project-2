import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RingLoader from 'react-spinners/RingLoader'
import JobList from './JobList'

function JobDetail({ match }) {
  const id = match.params.id

  const [job, updatejob] = useState([])
  const [loading, updateLoading] = useState(true)


  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.${id}json`)
      .then(({ data }) => {
        updatejob(data)
        updateLoading(false)
      })
  }, [])

  console.log(job)

  if (loading) {
    return <div className="container has-text-centered mt-6">
      <RingLoader loading={loading} size={80} color={'aqua'} />
    </div>
  }

  return <div>
    {job.title}
  </div>
}

export default JobDetail