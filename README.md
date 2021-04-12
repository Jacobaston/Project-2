### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# Project 2: Jobs board

For our second project for the General Assembly Software Engineering Immersive course, we worked in pairs to built a simple jobs board using React. This accesses the public GitHub jobs API and returns a list of jobs matching the search criteria.

Check it out [here](https://ikalff.github.io/project-2/)

## The Brief
- Must consume a public API
- Must have several components
- The app should include a router
- Wireframes to be complete before building the app
- Have semantically clean HTML
- Be deployed online

## Technologies Used
- HTML5
- SCSS
- React.JS
- Git and GitHub

# The Approach

![screenshot](src/images/screenshot.png)

## Planning
Before beginning the task, we drew some rough wireframes and made a list of the basic requirements for our MVP, plus a list of additional features we would like to add once the basic requirements had been met. These included pagination and the ability to save jobs to a shortlist.

## Implementation
We started by setting up a simple site structure using React router, including a home page, results page and a page to display more detailed information on a single job. We used Axios to fetch data from the API, and mapped over this to output the results. We included a loading graphic which appears while the data is being fetched, an error page which appears if the data can not be retrieved, and pagination to split the results into pages.

React Router:
``` js
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/project-2" component={Home} />

      <Route
        path="/project-2/job-list/:location?/:description?/:page?"
        render={props => <JobList key={props.location.key} {...props} />}
      />

      <Route path="/project-2/job-detail/:id" component={JobDetails} />
      <Route path="/project-2/congratulations" component={Congratulations}/>
      <Route path="/project-2/error" component={Error} />
    </Switch>
  </BrowserRouter>
)
```

Axios:
``` js
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
```

Pagination:
```js
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
```

# Conclusion

## Challenges 
- This was my frist experience of pair programming. Our first challenge was deciding how we were going to split up the workload and keep our code clean and readable. We decided that the best way to go this was us the live share feature on VS code - this allowed us to work on problems together at the same time, while also allowing us to work on our own sections too.
- We chose to use a CSS framework rather than stick to pure CSS - this was a bit of a learning curve as netiher of us had used a CSS framework before. We selcted Bluma as we felt this has good documentation so would be eaiser to impliment compared to other frameworks out there.

### Future Improvements
- We discussed a number of potential future improvements to this project, including adding the ability to save jobs to a shortlist. We could also explore different ways of handling the search form validation, and include more search criteria to filter by.

## Lessons learned
- Team work makes the dream work. We found that splitting the work up into bitesize chucks really helped with the time-management of this project. As this only had 48 hours to complete this project this was very important to get on top of.
- Pagination was something neither of us has tackeled before, so reading around this was integral into order to get this up and running.
