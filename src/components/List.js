import React from 'react'


export default class List extends React.Component{

  renderRow = (item) => {
    return(
      <li key={item.id} className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" data-toggle="modal" data-target="#show-job" onClick={()=>this.props.handleShowJob(item)}>
        <div className="job-listing-logo">
          <img src= {item.logo} alt={`${item.title} - ${item.company}`} className="img-fluid"></img>
        </div>
        <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
          <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
            <h2>{item.title}</h2>
            <strong>{item.company}</strong>
          </div>
          <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
            <span className="icon-room"></span> {item.location}
          </div>
          <div className="job-listing-meta">
            <span className="badge badge-danger">{item.status}</span>
          </div>
        </div>
    </li>
    )
  }

  render(){
    return(
      
      <section className="site-section pt-0">
        <div className="container">
          <div className="mb-5">
           <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-rocket mr-3"></span>Jobs Tracking</h3>
          </div>
        <div className="md-form mt-0 mb-4">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>
          {/* <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">{this.props.title}</h2>
            </div>
          </div> */}
          <ul className="job-listings mb-5">
            {!!this.props.items.length?this.props.items.map(item => this.renderRow(item)):null}           
          </ul>

          {/* <div className="row pagination-wrap">
            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
              <span>Showing 1-7 Of 43,167 Jobs</span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="custom-pagination ml-auto">
                <a href="#" className="prev">Prev</a>
                <div className="d-inline-block">
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                </div>
                <a href="#" className="next">Next</a>
              </div>
            </div>
          </div> */}

        </div>
      </section>
    )
  }
}

List.defaultProps = {
  title: "this is title from the default props",
  items: [
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
    {url: "job-single.html",
    logo: "/images/job_logo_1.jpg",
    title: "Product Designer",
    company: "Adidas",
    location: "New York",
    status: "Remote"},
  ]
}