import React from 'react'


export default class Note extends React.Component {

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
    debugger
    this.state.editing = false
    this.props.editNote(e, this.props.note)
  }


  render(){
    return ( 
      <div> 
        {
          this.state.editing
          ? (<li className="list-group-item" >
              <input type="text" 
                value={this.props.note.content} 
                onChange={ (e) => this.props.handleNoteChange(e, this.props.note)}
                style={{width: "60%"}} />
              <button onClick={(e) => this.handleSubmit(e)}>submit</button>
              <button onClick={() => this.props.deleteNote(this.props.note)}>dlt</button>
            </li>)
          : (<li className="list-group-item">
              {this.props.note.content}
              <button onClick={this.handleEdit}>edit</button>
              <button onClick={() => this.props.deleteNote(this.props.note)}>dlt</button>
            </li>)
        }
      </div>
    )
  }

}

