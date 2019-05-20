import React, { Component } from 'react';

class Referendum extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("Upcoming Referendum loaded");
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
                    {contest.referendumTitle.substring(0, 20)}
                  </button>
        
                  <section
                    className="collapse"
                    id={`${contest.referendumTitle}upcoming`}
                  >

                    <section className="card">
                
                      <section className="card-body">

                        <h5 className="card-title">{contest.referendumTitle}</h5>
                        
                        <p className="card-text">{contest.referendumSubtitle}</p>

                        <p className="card-text">
                          <a 
                            href={contest.referendumUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link to full text
                          </a>
                        </p>

                      </section>
                  
                    </section>

                  </section>
  
                </section>;
      
              } else {
              
                return null;
                
              }
    
            }) 
            
          : <h4 className="card-text py-3">No upcoming Referendum</h4> }
  
          </section>
  
      </section>

    );
  }
}

export default Referendum;
