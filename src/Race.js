import React, { Component } from 'react';

class Race extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("race loaded");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (
      
      <React.Fragment>
      
        <h4 className="mt-3 mb-1">Upcoming Races</h4>
  
        <section className="card text-center my-5">
  
          <button
            className="py-3"
            type="button"
            data-toggle="collapse"
            data-target="#senatorRace"
            aria-expanded="true"
            aria-controls="#senatorRace"
          >
            Candidate Races for Office
          </button>
  
          <section
            className="collapse"
            id="senatorRace"
          >
  
          {votingData ?
          
            votingData.contests.map((contest, key) => {
            
            if(contest.candidates) {
    
              return <section
                className="raceCandidates card mb-2"
                key={key}
              >
    
                <section
                  className="card-header"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#${String.fromCharCode(key+65)}`}
                  aria-expanded="false"
                  aria-controls={`#${String.fromCharCode(key+65)}`}
                >
                  <h5 className="card-title">{contest.office}</h5>
                  <p className="card-subtitle">click to expand</p>
                </section>
    
                <ul
                  className="collapse"
                  id={`${String.fromCharCode(key+65)}`}
                >
    
                  {contest.candidates.map((candidate, key) => {
    
                    return <li key={key}>
    
                      <section className="card">
                        <section className="card-body">
                          <h5 className="card-title">{candidate.name}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{candidate.party}</h6>
                          <a
                            href={candidate.candidateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                          >
                            Website
                          </a>
                        </section>
                      </section>
    
                    </li>
    
                  })}
    
                </ul>
    
              </section>
              
            } else {
              return null;
            }
    
              }) 
            
            :null }
  
          </section>
  
        </section>
        
      </React.Fragment>

    );
  }
}

export default Race;
