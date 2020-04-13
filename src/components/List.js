import React from 'react'




export default class List extends React.Component{

  renderRow = (item) => {

    const briefcase = 
      <svg className="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6h-1v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-6H0v6z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v2.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 00-.5.5v1.616l6.871 1.832a.5.5 0 00.258 0L15 6.116V4.5a.5.5 0 00-.5-.5h-13zM5 2.5A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" clipRule="evenodd"/>
      </svg>

    const notApplied = <span className="badge badge-pill badge-danger">Not Applied</span>
    const followUp = <span className="badge badge-pill badge-success">Follow Up</span>
    const closed = <span className="badge badge-pill badge-secondary">Closed</span>

    let badge 
    switch (item.status){
      case "not-applied":
        badge = notApplied
        break
      case "follow-up":
        badge = followUp
        break
      case "closed":
        badge = closed
      default:
        badge = notApplied
    }

    return(
    //   <li key={item.id} className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" data-toggle="modal" data-target="#show-job" onClick={()=>this.props.handleShowJob(item)}>
    //     <div className="job-listing-logo">
    //       <img src= {item.logo} alt={`${item.title} - ${item.company}`} className="img-fluid"></img>
    //     </div>
    //     <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
    //       <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
    //         <h2>{item.title}</h2>
    //         <strong>{item.company}</strong>
    //       </div>
    //       <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
    //         <span className="icon-room"></span> {item.location}
    //       </div>
    //       <div className="job-listing-meta">
    //         <span className="badge badge-danger">{item.status}</span>
    //       </div>
    //     </div>
    // </li>
      <tr key={item.id} data-toggle="modal" data-target="#show-job" onClick={()=>this.props.handleShowJob(item)}>
        {/* maybe switch below out with linkedin/monster/indeed */}
        <td>{briefcase}</td>
        <td>{item.company}</td>
        <td>{item.title}</td>
        <td>{item.location}</td>
        <td> maybe </td>
        <td>{badge}</td>
      </tr>



    )
  }

  render(){
    // return(
    //    !!this.props.items.length
    //     ? (<section className="site-section pt-0 pb-0">
    //           <div className="container">
    //             <div className="mb-5 mt-5" >
    //               <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-rocket mr-3"></span>Jobs Tracking</h3>
    //             </div>
    //           <div className="md-form mt-0 mb-4">
    //             <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
    //           </div>
    //           <ul className="job-listings mb-5">
    //               {this.props.items.map(item => this.renderRow(item))}
    //           </ul>
    //         </div>
    //       </section>)
    //     : ((<div className="row mb-5 mt-5 justify-content-center">
    //           <div className="col-md-7 text-center">
    //             <h2 className="section-title mb-2">You currently are tracking no jobs...</h2>
    //           </div>
    //         </div> ) )
    // )

    return(
      // !!this.props.items.length
      !!this.props.items
       ? (<section className="site-section pt-0 pb-0 mb-5">
            <div className="container">
              <div className="mb-5 mt-5" >
                <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-eye mr-3"></span>Jobs Tracking</h3>
              </div>
              <div className="md-form mt-0 mb-4">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
              </div>

              <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div id="filters" className="filters text-center button-group col-md-7">
                  <button className="btn btn-primary" data-filter="*" onClick={this.props.setFilter}>All</button>
                  <button className="btn btn-primary" data-filter="event" onClick={this.props.setFilter}>Not Applied</button>
                  <button className="btn btn-primary" data-filter="lead" onClick={this.props.setFilter}>Follow-Up</button>
                  <button className="btn btn-primary" data-filter="company" onClick={this.props.setFilter}>Closed</button>
                </div>
              </div>  

              <table className="table table-hover" width="100%">
                <thead>
                  <tr>
                    <th className="th-sm"></th>
                    <th className="th-sm">Company</th>
                    <th className="th-sm">Position</th>
                    <th className="th-sm">Location</th>
                    <th className="th-sm">Date Applied</th>
                    <th className="th-sm">Satus</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.items.map(item => this.renderRow(item))}
                </tbody>
              </table>
            </div>
         </section>)
       : ((<div className="row mb-5 mt-5 justify-content-center">
             <div className="col-md-7 text-center">
               <h2 className="section-title mb-2">You currently are tracking no jobs...</h2>
             </div>
           </div> ) )
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