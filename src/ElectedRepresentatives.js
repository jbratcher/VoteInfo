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

            if(office.name) {

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

              </section>

            } else {
              return null;
            }

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
