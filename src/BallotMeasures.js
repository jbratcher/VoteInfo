import React, { Component } from 'react';

class BallotMeasures extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("ballots");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (
      
      <React.Fragment>
      
        <h4 className="mt-3 mb-1">Upcoming Referendum</h4>
  
        <section className="card text-center my-5">
  
          {votingData ?
          
            votingData.contests.map((contest, key) => {
            
            if(contest.type === "Referendum") {
    
              return <section
                className="card mb-2"
                key={key}
              >

                <h5 className="card-title">{contest.referendumTitle}</h5>
                <h6 className="card-subtitle">{contest.referendumSubtitle}</h6>
                <p className="card-text">
                  <a 
                    href={contest.referendumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </p>

              </section>
    
            } else {
            
              return null;
              
            }
    
            }) 
            
            :null }
  
          </section>
  
      </React.Fragment>

    );
  }
}

export default BallotMeasures;
