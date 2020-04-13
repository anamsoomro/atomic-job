import React from "react"
import TasksBox from "./TasksBox"
import Title from "../components/Title"

export default class UserTasks extends React.Component {

  constructor(){
    super()
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.user.id}/tasks`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}` 
      }
    })
    .then(resp => resp.json())
    .then(tasksList => {
      this.setState({
        tasks: tasksList
      })
    })
  }

  editTask = (task) => {
    fetch(`http://localhost:3000/user_tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }, 
      body: JSON.stringify(task)
    })
    .then(resp => resp.json())
    .then(updatedTask => {
      let updatedTaskList = this.state.tasks.map( task=> 
        task.id === updatedTask.id ? task = updatedTask : task
      )
      this.setState({
        tasks: updatedTaskList
      })
    })
  }

  addTask = (event, task) => {
    event.preventDefault()
    let postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        item: event.target[0].value,
        closed: false,
        user_id: this.props.user.id
      })
    }
    event.target.reset()
    fetch(`http://localhost:3000/user_tasks`, postObj)
    .then(resp => resp.json())
    .then(newTask => {
      this.state.tasks.push(newTask)
      this.setState({
        tasks: this.state.tasks
      })
    })
  }

  deleteTask = (task) => {
    fetch(`http://localhost:3000/user_tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(reminaingTaskList => {
      this.setState({
        tasks: reminaingTaskList
      })
    })
  }


  render(){
    console.log("usertasks rendered")
    return(

      // <section className="site-section">
        <div className="container">
          <div className="mt-5 justify-content-center">
            {/* <div className="col-md-7 text-center"> */}
              <TasksBox 
                tasks={this.state.tasks} 
                addTask={this.addTask} 
                editTask={this.editTask} 
                deleteTask={this.deleteTask} 
                handleTaskChange={this.handleTaskChange}/>
            {/* </div>  */}
          </div> 
        </div> 
      // </section>


    )
  }

}



