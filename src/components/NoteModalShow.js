import React from "react"

export default class NoteModalShow extends React.Component {

  constructor(){
    super()
    this.state = {
      title: "",
      content: "",
      category: "",
      id: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.editNote(this.state)
  }

  handleDelete = () => {
    this.props.deleteNote(this.props.note)
  }

  componentDidMount(){
    this.setState({
      title: this.props.note.title,
      content: this.props.note.content, 
      category: this.props.note.category,
      id: this.props.note.id
    })
  }

  render(){
    return(
      <div className="modal fade" id="show-note">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
            </div>
            <div className="modal-footer">
              <label>Category:</label>
              <select name="category" value={this.state.category} onChange={this.handleChange}>
                <option value="event"> Event </option>
                <option value="lead"> Lead </option>
                <option value="company"> Company </option>
              </select>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}