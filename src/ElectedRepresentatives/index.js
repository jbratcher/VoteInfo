import React, { Component } from 'react';
import FederalRepresentatives from './FederalRepresentatives';
import StateRepresentatives from './StateRepresentatives';
import LocalRepresentatives from './LocalRepresentatives';

class ElectedRepresentatives extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("elected representatives loaded");
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
              className="btn btn-primary py-3"
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

            { electedRepresentativesData ?

            <section>

              <FederalRepresentatives
                electedRepresentativesData={electedRepresentativesData}
              />

              <StateRepresentatives
                electedRepresentativesData={electedRepresentativesData}
              />

              <LocalRepresentatives
                electedRepresentativesData={electedRepresentativesData}
              />

            </section>

            : null }

            </section>

          </section>

        </section>

      </section>

    );
  }
}

export default ElectedRepresentatives;
