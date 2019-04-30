import React, { Component } from 'react';

class LocalRepresentatives extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("local representatives loaded");
  }


  render() {

    const {
      electedRepresentativesData,
    } = this.props;

    return (

      <section className="card">

        <h4 className="card-title" hidden>Local Representatives</h4>
          
        <button
          className="btn btn-secondary"
          type="button"
          data-toggle="collapse"
          data-target="#localReps"
          aria-expanded="true"
          aria-controls="#localReps"
        >
          Local Representatives
        </button>

        <section
          className="collapse"
          id="localReps"
        >

          <section className="card-body text-center localRepresentatives">
  
            {electedRepresentativesData ?
  
              electedRepresentativesData.offices
                .filter(office => !office.levels)
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
                        : null}
                      
                        <h5 className="card-text">
                          {electedRepresentativesData.officials[officialIndex].name}
                        </h5>
                        <h6 className="card-text mb-2 text-muted">
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

export default LocalRepresentatives;
