import React from 'react'
import Task from './Task'


export default class TasksBox extends React.Component {

  render(){
    return(
        <div className="card">
          <ul className="list-group list-group-flush">
            {this.props.tasks.map(task => 
              <Task 
                key={task.id}
                task={task} 
                addTask={this.props.addTask} 
                editTask={this.props.editTask} 
                deleteTask={this.props.deleteTask}
                handleTaskChange={this.props.handleTaskChange}/>) 
            }
            <form onSubmit={(e) => this.props.addTask(e, this.props.task) }>
              <input type="text" placeholder="new task"/>
              <input type="submit" />
            </form>
          </ul>
        </div>
    )

  }

}

