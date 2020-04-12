import React from "react"

export default class NoteModalCreate extends React.Component {

  constructor(){
    super()
    this.state = {
      title: "",
      content: "",
      category: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.newNote( this.state )
  }

  render(){
    return(
        <div className="modal fade" id="create-note">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <input type="text" name="title" placeholder="title... " onChange={this.handleChange}/>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input type="text" name="content" placeholder="your notes... " onChange={this.handleChange}/>
              </div>
              <div className="modal-footer">
                <label>Category:</label>
                <select name="category" onChange={this.handleChange}>
                  <option value="event"> Event </option>
                  <option value="lead"> Lead </option>
                  <option value="company"> Company </option>
                </select>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save</button>
                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
              </div>
            </div>
          </div>
        </div>
    )
  }

}