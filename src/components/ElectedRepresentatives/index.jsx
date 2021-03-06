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
    console.log("Elected Reps Index loaded");
  }


  render() {

    const {
      electedRepresentativesData,
    } = this.props;

    return (

      <section className="card electedRepresentatives">

        <h4 className="card-title" hidden>Elected Representatives</h4>

        <section className="card representativesCard">

          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#electedRepresentatives"
            aria-expanded="true"
            aria-controls="#electedRepresentatives"
          >
            Your Representatives
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

    );
  }
}

export default ElectedRepresentatives;
