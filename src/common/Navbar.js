import React from 'react'

export default class Navbar extends React.Component{

  render(){
    return(
      <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle">
            </span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
        </div>
      </div> 
     
    

    
      <header className="site-navbar mt-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="site-logo col-6">
              <a href="index.html">Atomic Job  </a>
            </div>
            <nav className="mx-auto site-navigation">
              <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li><a href="/" className="nav-link active"> Home</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/notes">Notes</a></li>
                <li><a href="/about">About</a></li>
                
                <li className="d-lg-none"><a href="/login">Log In</a></li>
              </ul>
            </nav>
            
            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
              <div className="ml-auto">
                <a href="/login" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</a>
              </div>
              <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></a>
            </div>

          </div>
        </div>
      </header>
      </div>
    )
  }
}

// it is example of dropdown:
// <li className="has-children">
// <a href="job-listings.html">Job Listings</a>
// <ul className="dropdown">
//   <li><a href="job-single.html">Job Single</a></li>
//   <li><a href="post-job.html">Post a Job</a></li>
// </ul>
// </li>