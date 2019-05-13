import React, { Component } from 'react';

class OfficeRaces extends Component {

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
      
      <section className="card upcomingRacesCard">
      
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#upcomingRaces"
          aria-expanded="true"
          aria-controls="#upcomingRaces"
        >
          Upcoming Races
        </button>
        
        <section className="collapse" id="upcomingRaces">
            
          <section className="card text-center officeRaces">
    
            {votingData ?
            
              votingData.contests.map((contest, key) => {
              
              if(contest.candidates) {
      
                return <section
                  className="card raceCandidates"
                  key={key}
                >
      
                  <h5 className="card-title" hidden>{contest.office}</h5>
                  
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${contest.office}upcoming`}
                    aria-expanded="true"
                    aria-controls={`#${contest.office}upcoming`}
                  >
                    {contest.office}
                  </button>
        
                  <section
                    className="collapse"
                    id={`${contest.office}upcoming`}
                  >
                    
                    <section className="card-body">
          
                      {contest.candidates.map((candidate, key) => {
        
                        return <section className="card" key={key}>
                          <section className="card-body">
                            <h5 className="card-title">{candidate.name}</h5>
                            <h6 className="card-subtitle text-muted">{candidate.party}</h6>
                            <a
                              href={candidate.candidateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-link"
                            >
                              Website
                            </a>

                              { candidate.channels ?

                              <ul className="socialLinks">

                                { candidate.channels[0] ?

                                <li>
                                  <a
                                    href={candidate.channels[0].id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-link"
                                  >
                                    <i className="fab fa-facebook-square"></i>
                                  </a>
                                </li>

                                : null }

                                { candidate.channels[1] ?

                                <li>
                                  <a
                                    href={candidate.channels[1].id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-link"
                                  >
                                    <i className="fab fa-twitter-square"></i>
                                  </a>
                                </li>

                                : null }

                                { candidate.channels[2] ?

                                <li>
                                  <a
                                    href={candidate.channels[2].id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-link"
                                  >
                                    <i className="fab fa-youtube-square"></i>
                                  </a>
                                </li>

                                : null }

                              </ul>

                              : null }

                          </section>
                        </section>
        
                      })}
                        
                    </section>
        
                  </section>
      
                </section>;
                
              } else {
                return null;
              }
      
                }) 
              
              :null }
    
          </section>
          
        </section>
      
      </section>

    );
  }
}

export default OfficeRaces;
