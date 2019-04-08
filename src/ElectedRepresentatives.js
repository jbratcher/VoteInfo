import React, { Component } from 'react';

class ElectedRepresentatives extends Component {

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
      electedRepresentativesData,
    } = this.props;

    return (

      <section className="card electedRepresentatives">
      
        <section className="card-body">
        
          <h4 className="card-title p-2">Elected Representatives</h4>
  
          <section className="card text-center">
  
            <button
              className="py-3"
              type="button"
              data-toggle="collapse"
              data-target="#electedRepresentatives"
              aria-expanded="true"
              aria-controls="#electedRepresentatives"
            >
              Current Representatives
            </button>
  
            <section
              className="collapse"
              id="electedRepresentatives"
            >
  
            {electedRepresentativesData ?
  
              electedRepresentativesData.offices.map((office, key) => {
              
                return <section
                  className="card mb-2"
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
                    <h5 className="card-title">{office.name}</h5>
                    <p className="card-subtitle">click to expand</p>
                  </section>
                  
                  <ul
                    className="collapse"
                    id={`${String.fromCharCode(key+65)}`}
                  >
                  
                  {office.officialIndices.map((officialIndex, key) => {
                  
                    return <li key={key}>
    
                      <section className="card">
                        <section className="card-header">
                          <figure>
                            <img
                              className="card-img-top"
                              src={electedRepresentativesData.officials[officialIndex].photoUrl} 
                              alt={electedRepresentativesData.officials[officialIndex].name}
                            ></img>
                          </figure>
                        </section>
                        <section className="card-body">
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
                            Website
                          </a>
                        </section>
                      </section>
    
                    </li>;
                    
                  })}
                  
                  </ul>
  
                </section>;
  
                })
  
              :null }
  
            </section>
  
          </section>
          
        </section>

      </section>

    );
  }
}

export default ElectedRepresentatives;
