import React, { Component } from 'react';

class UserAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("address form");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="card text-center my-5">

        <button
          className="py-3"
          type="button"
          data-toggle="collapse"
          data-target="#senatorRace"
          aria-expanded="true"
          aria-controls="#senatorRace"
        >
          Candidate Races for Office
        </button>

        <section
          className="collapse"
          id="senatorRace"
        >

        {votingData.contests.map((contest, key) => {

          return <section
            className="raceCandidates card mb-2"
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
              <h5 className="card-title">{contest.office}</h5>
              <p className="card-subtitle">click to expand</p>
            </section>

            <ul
              className="collapse"
              id={`${String.fromCharCode(key+65)}`}
            >

              {contest.candidates.map((candidate, key) => {

                return <li key={key}>

                  <section className="card">
                    <section className="card-body">
                      <h5 className="card-title">{candidate.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{candidate.party}</h6>
                      <a
                        href={candidate.candidateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        Website
                      </a>
                    </section>
                  </section>

                </li>

              })}

            </ul>

          </section>

          })}

        </section>

      </section>

    );
  }
}

export default UserAddress;
