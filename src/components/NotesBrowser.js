import React from 'react'
import NoteModalShow from "./NoteModalShow"
import NoteModalCreate from "./NoteModalCreate"

export default class NotesBrowser extends React.Component{

  constructor(){
    super()
    this.state = {
      notes: [],
      notesDisplay: [],
      showNote: null
    } 
  }

  componentDidMount(){
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
        notesDisplay: notesData,
        showNote: null 
      })
    })
  }

  showNoteCard = (note) => {
    return (
      <div className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5" key={note.id} data-toggle="modal" data-target="#show-note" onClick={() => this.setShowNote(note)}>
        <div  className="block__16443 text-center d-block">
          <span className="custom-icon mx-auto"><span className="icon-magnet d-block"></span></span>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      </div>
    )
  }

  setShowNote = (note) => {
    // not sure you why you have to double click on card the first time load page 
    console.log("setShowNote", note)
    this.setState({
      showNote: note
    })
  }

  newNote = (note) => {
    fetch("http://localhost:3000/user_notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
        category: note.category, 
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

  editNote = (note) => {
    fetch(`http://localhost:3000/user_notes/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
        category: note.category
      })
    })
    .then(resp => resp.json())
    .then(updatedNote => {
      let updatedList = this.state.notes.map( note => 
        note.id === updatedNote.id ?  note = updatedNote : note
      )
      this.setState({
        notes: updatedList,
        notesDisplay: updatedList
      })
    })
  }

  deleteNote = (note) => {
    fetch(`http://localhost:3000/user_notes/${note.id}`,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(resp => resp.json())
    .then(remainingNotes => {
      // or should i have the back end not render anything back
      // just remove element from array 
      this.setState({
        notes: remainingNotes,
        notesDisplay: remainingNotes
      })
    })
  }

  render(){
    return(
      <section className="site-section services-section bg-light block__62849" id="next-section">
        <div className="container">
          <div className="row" >
            {/* Create a New Note*/}
            <div  className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5" data-toggle="modal" data-target="#create-note" >
              <div>
                <div href="service-single.html" className="block__16443 text-center d-block">
                  <span className="custom-icon mx-auto"><span className="icon-magnet d-block"></span></span>
                  <h3>New Note </h3>
                  <p>Add Notes About Events, Leads or Companies</p>
                </div>
              </div>
            </div> 
            {/* Existing Notes */}
            {this.state.notesDisplay.map(note => this.showNoteCard(note))}
          </div>
        </div>
        <NoteModalCreate  newNote={this.newNote}  />
        {
          this.state.showNote
          ? <NoteModalShow note={this.state.showNote} editNote={this.editNote} deleteNote={this.deleteNote}/>
          : null
        }
      </section>
    )
  }
}

