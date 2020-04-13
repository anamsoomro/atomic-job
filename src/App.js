import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './containers/Template'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Jobs from './containers/Jobs'
import Home from './containers/Home'
// import JobShow from './components/JobShow'
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
      user: false
    }
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(user => this.setState({user}))
    }
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({user: false})
  }

  handleLogin = (user) => this.setState({user})

  renderRoutes = () => {
    if (this.state.user){
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(routerProps) => <Home  {...routerProps} user={this.state.user}/> }/>
            <Route exact path="/jobs" render={(routerProps) => <Jobs {...routerProps} user={this.state.user} /> }/>
            {/* <Route path="/job/:id" component={<JobShow /> }/> */}
            <Route exact path="/job/new" render={(routerProps) => <JobForm {...routerProps} /> }/>
            <Route exact path="/companies" render={(routerProps) => <Companies {...routerProps} user={this.state.user} /> }/>
            {/* <Route path="/company/:id" component={<SingleCompany /> }/> */}
            <Route exact path="/about" render={(routerProps) => <About {...routerProps} /> }/>
            <Route exact path="/login" render={(routerProps) => <Home  {...routerProps} user={this.state.user}/> }/>
          </Switch>
        </BrowserRouter>
      )
    }
    else{
      return(
        <Login handleLogin = {this.handleLogin} user={this.state.user}/>
          
      )
    }
 
  }

  render(){
    return (
      <div className="App">
        <Navbar user = {this.state.user} handleLogout={this.handleLogout}/> 
          <div className="site-wrap">
          {this.renderRoutes()}
          </div>
        <Footer />
      </div>
    );
  }
}

