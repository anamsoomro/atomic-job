import React from 'react'

export default class JobForm extends React.Component{


  render(){
    return(
      <section className="home-section section-hero overlay bg-image" style={{"background-image": "url('images/hero_1.jpg')"}} id="home-section">

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="mb-5 text-center">
                <h1 className="text-white font-weight-bold">The Easiest Way To Get Your Dream Job</h1>
                <p>I dont know how we will use that thing, but you can edit it in the /components/Jobform.js</p>
              </div>
              {/* <form method="post" className="search-jobs-form"> */}
              <form className="search-jobs-form" onSubmit={this.props.addJob}>

                <div className="row mb-5">
                  <div className="span2 offset1 mr-4" >
                    <input type="text" className="form-control form-control-lg" placeholder="Job title..."></input>
                  </div>
                  <div className="span2 mr-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Company..."></input>
                  </div>
                  <div className="span2 mr-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Location..."></input>
                  </div>
                  <div className="span2 mr-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Link..."></input>
                  </div>
                  <div className="span2 mr-4">
                    <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2"></span>Search Job</button>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12 popular-keywords">
                    <h3>Trending Keywords:</h3>
                    <ul className="keywords list-unstyled m-0 p-0">
                      <li><a href="#" className="">UI Designer</a></li>
                      <li><a href="#" className="">Python</a></li>
                      <li><a href="#" className="">Developer</a></li>
                    </ul>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>

        <a href="#next" className="scroll-button smoothscroll">
          <span className=" icon-keyboard_arrow_down"></span>
        </a>

      </section>
    )
  }
}