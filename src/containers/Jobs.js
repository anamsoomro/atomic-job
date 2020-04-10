import React from 'react'
import JobShow from "../components/JobShow"
import JobList from "./JobList"
import List from '../components/List'
import Title from '../components/Title'

export default class Jobs extends React.Component {

  constructor(){
    super()
    this.state = {
      jobs : [], 
      jobsDisplay: [], 
      user_id: 1,
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
        showJob: jobData[0]
      })
    })
  }
  
  handleShowJob (){
    // this will be called when you click on a job card within job list
    // pass this function to JobList
  }


  render(){
    return (
      <div>
        <Title title = "Your job listings" />
        <List title = "Your current job listings" items={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/>
        {
        this.state.showJob
        ? <JobShow job={this.state.showJob}/> 
        : null
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