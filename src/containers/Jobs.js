import React from 'react'
import JobShow from "../components/JobShow"
// import JobList from "../void/JobList"
import List from '../components/List'
import Title from '../components/Title'
import JobForm from "../components/JobForm"

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


  // {"user":{"name":"dumdum","id":22},"jwt":"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMn0.iTTIBEfmpXOaoj3G0A6Tm_iuU2FKAl7VIRD7RpGhVYc"}

  componentDidMount(){
    // we can pass username or user_id to the backend 
    // HM ITS GETTING THAT I AM UNAUTHORIZED
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
        // showJob: jobData[0]
      })
    })
  }
  
  handleShowJob = (job) => {
    console.log("job", job)
    this.setState({
      showJob: job
    })


    
  }

  handleBack = () => {
    console.log("ASDfasdf")
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


  render(){
    return (
      <div>
        <Title title = "Your job listings" />
        {/* <List title = "Your current job listings" items={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/> */}
        {
        this.state.showJob
        // ? <JobShow job={this.state.showJob} handleBack={this.handleBack}/> : null
        ? <JobShow job={this.state.showJob} handleBack={this.handleBack}/> 
        : (<List title = "Your current job listings" items={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/>)
        }
        <JobForm addJob={this.addJob}/>

      </div>
    )
  }

}

