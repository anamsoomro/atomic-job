import React from 'react'
import JobForm from '../components/JobForm'
import Counters from '../components/Counters'
import List from '../components/List'
import GreenCrossPiece from '../components/GreenCrossPiece'
import LogoList from '../components/LogosList'
import Carousel from '../components/Carousel'
import Mobile from '../components/Mobile'
import Jobs from '../containers/Jobs'
// import JobList from '../containers/JobList'

export default class Home extends React.Component{

  render(){
    return(
      <div className="site-wrap">
        {/* <JobForm /> */}
        <Jobs />
        {/* <Counters /> */}
        {/* <GreenCrossPiece /> */}
        {/* <LogoList /> */}
        {/* <Carousel /> */}
        {/* <Mobile /> */}
      </div>
    )
  }
}