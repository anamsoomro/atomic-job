import React from 'react'
import JobShow from "../components/JobShow"
// import JobList from "../void/JobList"
import List from '../components/List'
<<<<<<< HEAD
import Title from '../components/Title'
=======
import JobForm from "../components/JobForm"
>>>>>>> e39120031f7fc169e93ffafa30cc052b9bb20588

export default class Jobs extends React.Component {

  constructor(){
    super()
    this.state = {
      jobs : [], 
      jobsDisplay: [], 
      user_id: 11,
      showJob: null
    }
  }

  componentDidMount(){
    // we can pass username or user_id to the backend 
    fetch(`http://localhost:3000/users/${this.state.user_id}/jobs`)
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
      headers: {"Content-Type": "application/json"},
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
<<<<<<< HEAD
        <Title title = "Your job listings" />
        <List title = "Your current job listings" items={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/>
=======
      <JobForm addJob={this.addJob}/>
>>>>>>> e39120031f7fc169e93ffafa30cc052b9bb20588
        {
        this.state.showJob
        ? <JobShow job={this.state.showJob} handleBack={this.handleBack}/> 
        : (<div>
           <List title = "Your current job listings" items={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/> </div>)
        }
      </div>
    )
  }

}

// title: "this is title from the default props",
// items: [
//   {link: "job-single.html",
//   logo: "/images/job_logo_1.jpg",
//   title: "Product Designer",
//   company: "Adidas",
//   location: "New York",
//   type: "Remote"},

// t.string "title"
// t.string "company"
// t.string "status"
// t.boolean "interview"
// t.string "location"
// t.string "url"