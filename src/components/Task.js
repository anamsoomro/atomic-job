import React from 'react'


export default class Task extends React.Component {

  constructor(){
    super()
    this.state = {
      editing: false,
    }
  }
  
  handleEdit = () => {
    this.setState({
      editing: true,
    })
  }

  handleSubmit = (e) => {
    this.state.editing = false
    this.props.editTask(e, this.props.task)
  }

  toggleClosed = (e, task) => {
    task.closed = !task.closed
    this.props.editTask(e, task)
  }

  render(){
    return ( 
      <div> 
        {
          this.state.editing
          ? (<li className="list-group-item" >
              <input type="checkbox" 
                checked={this.props.task.closed} 
                onChange={this.props.editTask}/>
              <input type="text" 
                value={this.props.task.item} 
                onChange={ (e) => this.props.handleTaskChange(e, this.props.task)}
                style={{width: "60%"}} />
              <button onClick={(e) => this.handleSubmit(e)}>submit</button>
              <button  onClick={() => this.props.deleteTask(this.props.task)}>dlt</button>
            </li>)
          : (<li className="list-group-item">
              <input type="checkbox" 
                checked={this.props.task.closed} 
                onChange={(e) => this.toggleClosed(e, this.props.task)}/>
              {this.props.task.item}
              <button onClick={this.handleEdit}>edit</button>
              <button onClick={() => this.props.deleteTask(this.props.task)}>dlt</button>
            </li>)
        }

        {/* NOT SURE HOW TO/WHEN TO PATCH TO DATABASE  */}
        {/* <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input"/>
            </div>
          </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox"
            value={this.props.task.item} onChange={ (e) => this.props.handleEditChange(e, this.props.task)}
          />
        </div> */}
      </div>
    )
  }

}

