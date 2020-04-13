import React from 'react'
// import JobShow from "../components/JobShow"
// import JobList from "../void/JobList"
import List from '../components/List'
import Title from '../components/Title'
import JobForm from "../components/JobForm"
import JobModalShow from '../components/JobModalShow'


export default class Jobs extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      jobs : [], 
      jobsDisplay: [], 
      user_id: props.user.id,
      showJob: null                       
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
        status: "apply",
        interview: "false",
        user_id: this.state.user_id
      })
    }
    event.target.reset()
    fetch("http://localhost:3000/jobs", postObject)
    .then(resp => resp.json())
    .then(newJob => {
      this.setState({
        jobsDisplay: [...this.state.jobs, newJob],
        showJob: newJob
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

  render(){
    return (
      <div>
        <Title title = "Your job listings" />
        <List title = " " items={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/>
        <JobForm addJob={this.addJob}/>
        { this.state.showJob 
        ? <JobModalShow job={this.state.showJob} deleteJob={this.deleteJob} editJob={this.editJob}/> 
        : null }
      </div>
    )
  }

}

