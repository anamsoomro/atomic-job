import React from 'react'
// import JobShow from "../components/JobShow"
// import JobList from "../void/JobList"
import List from '../components/List'
import JobForm from "../components/JobForm"
import JobModalShow from '../components/JobModalShow'


export default class Jobs extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      jobs : false, 
      jobsDisplay: false, 
      user_id: props.user.id,
      showJob: null,
      search: ''                       
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.state.user_id}/jobs`, {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then( jobData => {
      this.setState({
        jobs: jobData,
        jobsDisplay: jobData,
      })
    })
  }
  
  handleShowJob = (job) => {
    this.setState({
      showJob: job
    })
  }

  handleBack = () => {
    this.setState({
      showJob: null
    })
  }

  handleSearch = (e) => {
    let searchedJobs = this.state.jobs.filter(job => job.title.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({jobsDisplay: searchedJobs})
  }

  addJob = (event) => {
    event.preventDefault()
    let postObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        title: event.target[0].value,
        company: event.target[1].value,
        location: event.target[2].value,
        url: event.target[3].value,
        status: "Not Applied",
        interview: "false",
        user_id: this.state.user_id
      })
    }
    event.target.reset()
    fetch("http://localhost:3000/jobs", postObject)
    .then(resp => resp.json())
    .then(newJob => {
      this.state.jobs ? this.state.jobs.push(newJob) :  this.state.jobs = [newJob]
      this.setState({
        jobs: this.state.jobs,
        jobsDisplay: this.state.jobs
      })
    })
  }

  editJob = (job) => {
    fetch(`http://localhost:3000/jobs/${job.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ 
        title: job.title,
        company: job.company,
        location: job.location,
        status: job.status,
        interview: job.interview
      })
    })
    .then(resp => resp.json())
    .then(updatedJob => {
      let updatedJobList = this.state.jobs.map(job => 
        job.id === updatedJob.id ? job = updatedJob : job
      )
      this.setState({
        jobs: updatedJobList,
        jobsDisplay: updatedJobList
      })
    })
  }

  deleteJob = (job) => {
    fetch(`http://localhost:3000/jobs/${job.id}`,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(remainingJobs => {
      this.setState({
        jobs: remainingJobs,
        jobsDisplay: remainingJobs
      })
    })
  }

  setFilter = (event) => {
    let filter = event.target.dataset.filter
    let filteredJobs
    filter === "*"
    ? filteredJobs = this.state.jobs
    : filteredJobs = this.state.jobs.filter( job => job.status === filter )
    this.setState({
      jobsDisplay: filteredJobs
    })
  }

  render(){
    return (
      <div>
        <JobForm addJob={this.addJob}/>
         <List title = " " items={this.state.jobsDisplay} handleShowJob={this.handleShowJob} handleSearch={this.handleSearch} setFilter={this.setFilter}/>
        { this.state.showJob 
        ? <JobModalShow job={this.state.showJob} deleteJob={this.deleteJob} editJob={this.editJob}/> 
        : null }
      </div>
    )
  }

}

