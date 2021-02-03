// ? Libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// ? Routes
import Home from './components/Home'
import JobList from './components/JobList'
import JobDetails from './components/JobDetail'
import Navbar from './components/Navbar'
// ? Styles
import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/project-2" component={Home} />
      <Route path="/project-2/job-list/:location" component={JobList} />
      <Route path="/project-2/job-list/" component={JobList} />
      <Route exact path="/project-2/job-details/:id" component={JobDetails} />
    </Switch>
  </BrowserRouter>
)

export default App