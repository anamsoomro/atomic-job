import React from 'react'




export default class NotesBrowser extends React.Component{

  constructor(){
    super()
    this.state = {
      notes: [],
      notesDisplay: [],
      // open note, whether new or editing 
      title: "",
      content: "",
      category: ""
    } 
  }

  componentDidMount(){
    console.log("Component did mount", this.props)
    // Companies component has user id in props
    fetch(`http://localhost:3000/users/${this.props.user.id}/notes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
    })
    .then(resp=>resp.json())
    .then(notesData => {
      this.setState({
        notes: notesData,
        notesDisplay: notesData
      })
    })
  }

  showNote = (note) => {
    return (
      // <div className="row" key={note.id}>
        <div className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5" key={note.id}>
          <div  className="block__16443 text-center d-block">
            <span className="custom-icon mx-auto"><span className="icon-magnet d-block"></span></span>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        </div>
      // </div>
    )
  }

  handleChange = (event) => {
    // event.target.name will give you "name", "event" or "category"
    // event.target.value will give you the content to change
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  newNote = () => {
    // Fetch error, bad request 
    fetch("http://localhost:3000/user_notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        category: this.state.category, 
        user_id: this.props.user.id
      })
    })
    .then(resp => resp.json())
    .then(newNote => {
      this.state.notes.push(newNote)
      this.setState({
        notes: this.state.notes,
        notesDisplay: this.state.notes
      })
    })
  }

  render(){
    return(
        <section className="site-section services-section bg-light block__62849" id="next-section">
        <div className="container">

        <div className="row" data-toggle="modal" data-target="#new-note">
          <div className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
            <div href="service-single.html" className="block__16443 text-center d-block">
              <span className="custom-icon mx-auto"><span className="icon-magnet d-block"></span></span>
              <h3>New Note </h3>
              <p>Add Notes About Events, Leads or Companies</p>
            </div>
           </div>
        </div> 
          <div className="row" >
            {this.state.notesDisplay.map(note => this.showNote(note))}
          </div>
        </div>


      {/* when new note is clicked the below modal will appear */}
      <div className="modal fade" id="new-note">
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
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.newNote}>Save</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
       </div>
       
      </section>
    )
  }
}

