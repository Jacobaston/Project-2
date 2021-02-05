// ? Libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// ? Routes
import Home from './components/Home'
import JobList from './components/JobList'
import JobDetails from './components/JobDetail'
import Navbar from './components/Navbar'
import Congratulations from './components/Congratulations'
import Error from './components/Error'
// ? Styles
import 'bulma'
import './styles/style.scss'

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

export default App