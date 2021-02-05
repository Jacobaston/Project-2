import React from 'react'
import { Link } from 'react-router-dom'

// 404 Error catch
// If API doesn't load the user will be redirected to this error page,
// where they can then return to the home page and try the search again
function Error() {

  return <div className="container has-text-centered mt-6">
    <div className="title">
      <h1>ERROR 404</h1>
    </div>
    <div className="subtitle mt-5">  
      <h2>We cannot find the page you are looking for!</h2>
    </div>
    <div>
      <Link className="button is-link is-primary ml-5 mb-5" to={'/project-2'}>Return</Link>
    </div>
  </div>
}

export default Error