import React from 'react'


export default class Task extends React.Component {

  constructor(){
    super()
    this.state = {
      editing: false,
      task: ""
    }
  }

  componentDidMount(){
    this.setState({
      task: this.props.task
    })
  }
  
  handleEdit = () => {
    this.setState({
      editing: true,
    })
  }

  handleChange = (event) => {
    this.setState({
      task: {...this.state.task, item: event.target.value}
    })
  }

  handleSubmit = (e) => {
    this.state.editing = false
    this.props.editTask(this.state.task)
  }

  toggleClosed = (e, task) => {
    task.closed = !task.closed
    this.props.editTask(e, task)
  }


  render(){
    return ( 
      <div> 
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
          {!this.state.editing
          ? 
            <li className="d-flex align-items-start mb-2" onClick={this.handleEdit}>
              <span className="icon-check_circle mr-2 text-muted"></span>
              <span>{this.props.task.item}</span>
            </li>
            
          : <li className="d-flex align-items-start mb-2">
              <span className="icon-check_circle mr-2 text-muted"></span>
              <span>
                <input type="text" 
                  value={this.state.task.item} 
                  onChange={this.handleChange}
                  style={{width: "60%"}} />
                <button onClick={this.handleSubmit}>o</button>
                <button onClick={() => this.props.deleteTask(this.props.task)}>x</button>
              </span>
            </li>
          }
      </div>
    )
  }

}

