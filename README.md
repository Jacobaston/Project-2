### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# Project 2: Jobs board

For our second project for the General Assembly Software Engineering Immersive course, we worked in pairs to built a simple jobs board using React. This accesses the public GitHub jobs API and returns a list of jobs matching the search criteria.

## The Brief
- Must consumer a public API
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

## Planning
Before beginning the task, we drew some rough wireframes and made a list of the basic requirements for our MVP, plus a list of additional features we would like to add once the basic requirements had been met. These included pagination and the ability to save jobs to a shortlist.

## Implementation
We started by setting up a simple site structure using React router, including a home page, results page and a page to display more detailed information on a single job. We used Axios to fetch data from the API, and mapped over this to output the results. We included a loading graphic which appears while the data is being fetched, an error page which appears if the data can not be retrieved, and pagination to split the results into pages.

## Future Improvements
We discussed a number of potential future improvements to this project, including adding the ability to save jobs to a shortlist. We could also explore different ways of handling the search form validation, and include more search criteria to filter by.