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
      
      <section className="card col-md-6">
      
        <section className="card-body text-center my-5">
      
          <h4 className="card-title p-2">Upcoming Referendum</h4>
        
          { votingDataArray[3].some(contest => contest.type === "Referendum") ?
          
            votingData.contests.map((contest, key) => {
            
              if(contest.type === "Referendum") {
      
                return <section
                  className="card mb-2"
                  key={key}
                >
                  <section className="card-header">
                    <h5 className="card-title py-1">{contest.referendumTitle}</h5>
                    <h6 className="card-subtitle py-1">{contest.referendumSubtitle}</h6>
                  </section>
                  
                  <section className="card-body">
                    
                    <p className="card-text py-1">
                      <a 
                        href={contest.referendumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Referendum Link
                      </a>
                    </p>
                  </section>
  
                </section>;
      
              } else {
              
                return null;
                
              }
    
            }) 
            
          : <p className="card-text my-auto py-2">No upcoming Referendum</p> }
  
          </section>
  
      </section>

    );
  }
}

export default Referendum;
