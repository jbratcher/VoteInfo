import React, { Component } from 'react';

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
        
        <section className="card federalRepresentativesCard">

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

      </section>

    );
  }
}

export default FederalRepresentatives;
