import React from 'react'
import Mobile from '../components/Mobile'
import Title from '../components/Title'

export default class About extends React.Component {

  render(){
    return(
      <div>
         <Title title = "About Us" />
          <Mobile />
      </div>
    )
  }
}