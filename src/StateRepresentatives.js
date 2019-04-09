import React, { Component } from 'react';

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

      <section className="card stateRepresentatives">

        <section className="card-body">

          <h4 className="card-title p-2">State Representatives</h4>

          <section className="card text-center">

            <button
              className="py-3"
              type="button"
              data-toggle="collapse"
              data-target="#stateRepresentatives"
              aria-expanded="true"
              aria-controls="#stateRepresentatives"
            >
              State Representatives
            </button>

            <section
              className="collapse"
              id="stateRepresentatives"
            >

            {electedRepresentativesData ?

              electedRepresentativesData.offices
                .filter(office => office.levels)
                .filter(office => office.levels[0] === "administrativeArea1")
                .map((office, key) => {

                return <section
                  className="card mb-2"
                  key={office.name}
                >

                  <section
                    className="card-header"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${office.name}`}
                    aria-expanded="false"
                    aria-controls={`#${office.name}`}
                  >
                    <h5 className="card-title">{office.name}</h5>
                    <p className="card-subtitle">click to expand</p>
                  </section>

                  <ul
                    className="collapse"
                    id={`${office.name}`}
                  >

                  {office.officialIndices.map((officialIndex, key) => {

                    return <li key={key}>

                      <section className="card">
                        <section className="card-header">
                          { electedRepresentativesData.officials[officialIndex].photoUrl ?
                            <figure>
                              <img
                                className="card-img-top"
                                src={electedRepresentativesData.officials[officialIndex].photoUrl}
                                alt={electedRepresentativesData.officials[officialIndex].name}
                              ></img>
                            </figure>
                          : null }
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

export default StateRepresentatives;
