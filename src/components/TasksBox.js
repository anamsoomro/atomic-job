// import React from 'react'
// import Task from './Task'


// export default class TasksBox extends React.Component {

//   render(){
//     return(
//         <div className="card">
//           <ul className="list-group list-group-flush">
//             {this.props.tasks.map(task => 
//               <Task 
//                 key={task.id}
//                 task={task} 
//                 addTask={this.props.addTask} 
//                 editTask={this.props.editTask} 
//                 deleteTask={this.props.deleteTask}
//                 handleTaskChange={this.props.handleTaskChange}/>) 
//             }
//             <form onSubmit={(e) => this.props.addTask(e, this.props.task) }>
//               <input type="text" placeholder="new task"/>
//               <input type="submit" />
//             </form>
//           </ul>
//         </div>
//     )

//   }

// }



import React from 'react'
import Task from './Task'


export default class TasksBox extends React.Component {

  render(){
    return(
        <div className="mb-5">
          <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-rocket mr-3"></span>Tasks</h3>
          <ul className="list-unstyled m-0 p-0">
            {this.props.tasks.map (task => 
              <Task 
                task={task}
                key={task.id}
                task={task} 
                addTask={this.props.addTask} 
                editTask={this.props.editTask} 
                deleteTask={this.props.deleteTask}
                handleTaskChange={this.props.handleTaskChange}/>)}
            <li className="d-flex align-items-start mb-2">
              <span>
                <form onSubmit={(e)=> this.props.addTask(e, this.props.note)} >
                  <input type="text" placeholder="new task"/>
                  <input type="submit" value="+"/>
                </form>
              </span>
            </li>
          </ul>
        </div>

    )

  }

}


