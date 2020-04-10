import React from 'react'

export default class Counters extends React.Component {


  renderCounter(counter){
    return(
      <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
        <div className="d-flex align-items-center justify-content-center mb-2">
          <strong className="number" data-number={counter.value}>0</strong>
        </div>
        <span className="caption">{counter.name}</span>
      </div>
    )
  }

  render() {
    return (
      <section className="py-5 bg-image overlay-primary fixed overlay" id="next" style={{"background-image": "url('images/hero_1.jpg')"}}>
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2 text-white">
                {this.props.title}
              </h2>
              <p className="lead text-white">
                {this.props.description}
              </p>
            </div>
          </div>
          <div className="row pb-0 block__19738 section-counter">
            {this.props.counters.map(counter => this.renderCounter(counter))}
          </div>
        </div>
      </section>
    )
  }
}

Counters.defaultProps = {
  counters: [
    {name: "Job Postings", value: 30},
    {name: "Notes", value: 299},
    {name: "Companies", value: 25},
    {name: "Tasks", value: 35}
  ],
  title: "Your Job Search Stats",
  description: "This is default values for counters. You should provide something as props or change code at /components/Counters.js"
}