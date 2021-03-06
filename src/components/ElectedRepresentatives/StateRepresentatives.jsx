import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class StateRepresentatives extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("state representatives loaded");
  }


  render() {

    const {
      electedRepresentativesData,
    } = this.props;

    return (

      <section className="card">

        <h4 className="card-title" hidden>State Representatives</h4>
        
        <button
            className="btn btn-secondary"
            type="button"
            data-toggle="collapse"
            data-target="#stateReps"
            aria-expanded="true"
            aria-controls="#stateReps"
          >
            State Representatives
          </button>

          <section
            className="collapse"
            id="stateReps"
          >
        
            <section className="card-body text-center stateRepresentatives">
            
            {electedRepresentativesData ?
              // get offices that have a level key, match regex to lowercase state 2 letter code that ends string (api specific)
              electedRepresentativesData.offices
                .filter(office => office.divisionId.match(
                  /(a[klrz]|c[aot]|d[ce]|fl|ga|hi|i[adln]|k[sy]|la|m[adeinost]|n[cdehjmvy]|o[hkr]|p[ar]|ri|s[cd]|t[nx]|ut|v[ait]|w[aivy])(?!\/)$/
                  ) &&
                        office.name !== "U.S. Senator")
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
                      
                        <h5 className="card-text">
                          {electedRepresentativesData.officials[officialIndex].name}
                        </h5>
                        
                        <h6 className="card-text text-muted">
                          {electedRepresentativesData.officials[officialIndex].party}
                        </h6>
                        
                        { electedRepresentativesData.officials[officialIndex].urls ?
                          <a
                            href={electedRepresentativesData.officials[officialIndex].urls}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                          >
                            Official Website
                          </a>
                        : null }
                        
                        <SocialLinks 
                          electedRepresentativesData={electedRepresentativesData}
                          officialIndex={officialIndex}
                        />
                        
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

export default StateRepresentatives;
