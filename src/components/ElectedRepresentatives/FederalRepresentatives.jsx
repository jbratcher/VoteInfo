import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class FederalRepresentatives extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("federal representatives loaded");
  }


  render() {

    const {
      electedRepresentativesData,
    } = this.props;

    return (

      <section className="card">

        <h4 className="card-title" hidden>Federal Representatives</h4>
        
          <button
            className="btn btn-secondary"
            type="button"
            data-toggle="collapse"
            data-target="#fedReps"
            aria-expanded="true"
            aria-controls="#fedReps"
          >
            Federal Representatives
          </button>

          <section
            className="collapse"
            id="fedReps"
          >
          
            <section className="federalRepresentatives card-body text-center">
            
            {electedRepresentativesData ?
              // get offices that have a level key/value that is "country" and iterate
              electedRepresentativesData.offices
                .filter(office => office.levels)
                .filter(office => office.levels[0] === "country")
                .map((office, key) => {
  
                return <section
                  className="card"
                  key={office.name}
                >
  
                  {office.officialIndices.map((officialIndex, key) => {
  
                    return <section className="card" key={key}>
                      
                      <section className="card-header">
                      
                        <h5 className="card-title">{office.name}</h5>
  
                      </section>
                      
                      <section className="card-body">
                      
                        { electedRepresentativesData.officials[officialIndex].photoUrl ?
                        
                        <figure>
                          <img
                            className="card-img-top"
                            src={electedRepresentativesData.officials[officialIndex].photoUrl}
                            alt={electedRepresentativesData.officials[officialIndex].name}
                          ></img>
                        </figure>
                        
                        : null }
                    
                        <h5 className="card-title">
                          {electedRepresentativesData.officials[officialIndex].name}
                        </h5>
                        
                        <h6 className="card-subtitle mb-2 text-muted">
                          {electedRepresentativesData.officials[officialIndex].party}
                        </h6>
                        
                        <a
                          href={electedRepresentativesData.officials[officialIndex].urls}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link"
                        >
                          Official Website
                        </a>
                        
                        <SocialLinks 
                          electedRepresentativesData={electedRepresentativesData}
                          officialIndex={officialIndex}
                        />
                     
                        <button
                          className="btn btn-secondary"
                          id="moreInfoButton"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#${office.name}${officialIndex}MoreInfo`}
                          aria-expanded="true"
                          aria-controls={`${office.name}${officialIndex}MoreInfo`}
                        >
                          More Info
                        </button>

                        <section
                          className="collapse"
                          id={`${office.name}${officialIndex}MoreInfo`}
                        >

                           <section>

                             <h5>Mailing Address:</h5>

                             {electedRepresentativesData.officials[officialIndex].address ?

                             <p class="card-text">

                               {electedRepresentativesData.officials[officialIndex].address[0].line1}, <br></br>
                               {electedRepresentativesData.officials[officialIndex].address[0].line2}, <br></br>
                               {electedRepresentativesData.officials[officialIndex].address[0].city}, <br></br>
                               {electedRepresentativesData.officials[officialIndex].address[0].state}, <br></br>
                               {electedRepresentativesData.officials[officialIndex].address[0].zip}

                             </p>

                             : 
                              
                             <p class="card-text">No address found.</p>

                             }

                          </section>
                          
                          <section>

                             <h5>Contact Phone:</h5>

                             {electedRepresentativesData.officials[officialIndex].phones ?

                             <p class="card-text">

                               {electedRepresentativesData.officials[officialIndex].phones[0]}

                             </p>

                             : 
                              
                             <p class="card-text">No phone found.</p>

                             }

                          </section>
                           
                         </section>
                        
                      </section>
                      
                    </section>;
  
                  })}
  
                </section>;
  
                })
  
              :null }
            
            </section>
            
          </section>

      </section>

    );
  }
}

export default FederalRepresentatives;
