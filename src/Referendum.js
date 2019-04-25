import React, { Component } from 'react';

class Referendum extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("ballots loaded");
  }


  render() {

    const {
      votingData,
      votingDataArray
    } = this.props;

    return (
      
      <section className="card upcomingReferendumCard">
      
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#upcomingReferendum"
          aria-expanded="true"
          aria-controls="#upcomingReferendum"
        >
          Upcoming Referendum
        </button>
        
        <section className="collapse" id="upcomingReferendum">
        
          { votingDataArray[3].some(contest => contest.type === "Referendum") ?
          
            votingData.contests.map((contest, key) => {
            
              if(contest.type === "Referendum") {
      
                return <section
                  className="card referendum"
                  key={key}
                >
                
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${contest.referendumTitle}upcoming`}
                    aria-expanded="true"
                    aria-controls={`#${contest.referendumTitle}upcoming`}
                  >
                    {contest.referendumTitle}
                  </button>
        
                  <section
                    className="collapse"
                    id={`${contest.referendumTitle}upcoming`}
                  >
                
                    <section className="card-body">
                  
                      <h5 className="card-title">{contest.referendumTitle}</h5>
                      <h6 className="card-subtitle">{contest.referendumSubtitle}</h6>
  
                      <p className="card-text">
                        <a 
                          href={contest.referendumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Referendum Link
                        </a>
                      </p>
                      
                    </section>
                  
                  </section>
  
                </section>;
      
              } else {
              
                return null;
                
              }
    
            }) 
            
          : <p className="card-text my-auto">No upcoming Referendum</p> }
  
          </section>
  
      </section>

    );
  }
}

export default Referendum;
