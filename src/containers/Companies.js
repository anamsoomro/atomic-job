import React from 'react'
import Mobile from '../components/Mobile'
import Title from '../components/Title'
import NotesBrowser from '../components/NotesBrowser'

export default class Companies extends React.Component {

  render(){
    return(
      <div>
        <Title title = "Your Companies" />
        <NotesBrowser user={this.props.user}/> 
        {/* <Mobile /> */}
      </div>
    )
  }
}