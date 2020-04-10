import React from 'react'
import Note from './Note'

export default class NotesBox extends React.Component {

  showNotes = () => (
    this.props.notes.map(note => {
      return(
        <li className="list-group-item">
          {note.content}
          <button>edit</button>
          <button>dlt</button>
        </li>
      )
    })
  )

  showEditForm = (note) => {
    return(
    <li className="list-group-item">
        <input type="text" value={note.content} />
          <button>edit</button>
          <button>dlt</button>
    </li>
    )
  }

  render(){
    return(
        <div className="card">
          <ul className="list-group list-group-flush">
            {this.props.notes.map (note => 
              <Note key={note.id} note={note} 
                editNote={this.props.editNote} 
                deleteNote={this.props.deleteNote}
                handleNoteChange={this.props.handleNoteChange}/>
            )}
            <form onSubmit={(e)=> this.props.addNote(e, this.props.note)} >
              <input type="text" placeholder="new note"/>
              <input type="submit" />
            </form>
          </ul>
        </div>
    )
  }

}
