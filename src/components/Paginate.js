import React from 'react'
import { Link } from 'react-router-dom'

export default function Paginate({ pageNum, totalResults, resultsPerPage, locationFilter, jobFilter }) {

  // include pagination if there are multiple pages of results
  if (totalResults > resultsPerPage) {

    // create an array of pages that we can map over
    const pagesArray = []
    for (let i = 0; i < Math.ceil(totalResults / resultsPerPage); i++) {
      pagesArray.push(i + 1)
    }

    // map over the pages array to output the page number buttons
    return <div className="pagination m-5" role="navigation" aria-label="pagination">
      <p> Total results: {totalResults} </p>
      <p>
        {pagesArray.map(num => {
          return <Link className={parseInt(num) === parseInt(pageNum) ? 'pagination-link  is-current' : 'pagination-link'} key={num} to={`/project-2/job-list/${locationFilter ? locationFilter : ''}/${jobFilter ? jobFilter : ''}/${num}`}>{num}</Link>
        })}
      </p>
    </div>

  } else {
    // if there is only one page, just show the number of results
    return <div className="pagination m-5" role="navigation" aria-label="pagination">
      <p> Total results: {totalResults} </p>
    </div>
  }
}