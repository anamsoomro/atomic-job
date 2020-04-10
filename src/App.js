import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './containers/Template'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Jobs from './containers/Jobs'
import Home from './containers/Home'
import JobShow from './components/JobShow'
import JobForm from './components/JobForm'
import Companies from './containers/Companies'
import SingleCompany from './containers/SingleCompany'
import About from './containers/About'
import Login from './containers/Login'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      logged: false
    }
  }

  renderRoutes = () => {
    if (this.state.logged){
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(routerProps) => <Home  {...routerProps}/> }/>
            <Route exact path="/jobs" render={(routerProps) => <Jobs {...routerProps} /> }/>
            <Route path="/job/:id" component={<JobShow /> }/>
            <Route exact path="/job/new" render={(routerProps) => <JobForm {...routerProps} /> }/>
            <Route exact path="/companies" render={(routerProps) => <Companies {...routerProps} /> }/>
            <Route path="/company/:id" component={<SingleCompany /> }/>
            <Route exact path="/about" render={(routerProps) => <About {...routerProps} /> }/>
          </Switch>
        </BrowserRouter>
      )
    }
    else{
      return(
        <Login />
      )
    }
 
  }

  render(){
    return (
      <div className="App">
        <Navbar /> 
          <div className="site-wrap">
          {this.renderRoutes()}
          </div>
        <Footer />
      </div>
    );
  }
}

