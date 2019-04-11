import React, { Component } from 'react';

class VoterInformation extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("voter information loaded");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="card col-md-6 voterInformation">

        <section className="card-body">

          <h4 className="card-title p-2">Voter Information</h4>

          <ul>

            <li className="my-3">
              <a
                href={votingData.state[0].electionAdministrationBody.ballotInfoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  Current Ballot
                </button>
              </a>
            </li>

            <li className="my-3">
              <a
                href={votingData.state[0].electionAdministrationBody.electionInfoUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <button type="button" className="btn btn-primary">
                    Election Info
                  </button>
              </a>
            </li>

            <li className="my-3">
              <a
                href={votingData.state[0].electionAdministrationBody.votingLocationFinderUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <button type="button" className="btn btn-primary">
                    Voting Location Info
                  </button>
              </a>
            </li>

          </ul>

          <section className="card mt-5">
            <section className="card-body">
              <h5 className="card-title mb-3">Election Authority Address</h5>
              <p className="card-text"><b>{votingData.state[0].electionAdministrationBody.name}</b></p>
              <p className="card-text">{votingData.state[0].electionAdministrationBody.correspondenceAddress.line1},</p>
              <p className="card-text">
                {votingData.state[0].electionAdministrationBody.correspondenceAddress.city}, {votingData.state[0].electionAdministrationBody.correspondenceAddress.state}  {votingData.state[0].electionAdministrationBody.correspondenceAddress.zip}
              </p>
            </section>
          </section>


        </section>

      </section>

    );
  }
}

export default VoterInformation;
