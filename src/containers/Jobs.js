import React from 'react'
import JobShow from "./components/JobShow"
import JobList from "./JobList"

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
    // we can pass username/username_id to the backend 
    fetch(`http://localhost:3000/users/${this.state.user_id}/jobs`)
    .then(resp => resp.json())
    .then( jobData => {
      this.setState({
        jobs: jobData,
        jobsDisplay: jobData
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
        <JobList jobs={this.state.jobsDisplay} handleShowJob={this.handleShowJob}/>
        {/* <JobShow job={this.state.showJob}/> */}
        <JobShow job={this.state.jobsDisplay[0]}/> 

      </div>
    )
  }

}