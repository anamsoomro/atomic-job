import React from 'react'
import Mobile from '../components/Mobile'
import Title from '../components/Title'

export default class Companies extends React.Component {

  render(){
    return(
      <div>
        <Title title = "Your Companies" />
        <Mobile />
      </div>
    )
  }
}