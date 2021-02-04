import React from 'react'
import { Link } from 'react-router-dom'

export default function Paginate({ pageNum, totalResults, resultsPerPage, locationFilter, jobFilter }) {

  if (totalResults > resultsPerPage) {
    const pagesArray = []
    for (let i = 0; i < Math.ceil(totalResults / resultsPerPage); i++) {
      pagesArray.push(i + 1)
    }
    return <div className="pagination m-5" role="navigation" aria-label="pagination">
      <p> Total results: {totalResults} </p>

      <p>
        {pagesArray.map(num => {
          return <Link className={parseInt(num) === parseInt(pageNum) ? 'pagination-link  is-current' : 'pagination-link'} key={num} to={`/project-2/job-list/${locationFilter ? locationFilter : ''}/${jobFilter ? jobFilter : ''}/${num}`}>{num}</Link>
        })}
      </p>
    </div>
  } else {
    return <div className="pagination m-5" role="navigation" aria-label="pagination">
      <p> Total results: {totalResults} </p>
    </div>
  }
}