import React, { Component } from 'react';

class VoterInformation extends Component {

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
      electionsData
    } = this.props;

    return (

      <section className="card">

        <section className="card-body">

          <h4 className="listHeader card-title mb-4">
            Voter Information
          </h4>

          <ul id="voterInformation">

            <li className="my-3">
              <a
                href={electionsData.state[0].electionAdministrationBody.ballotInfoUrl}
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
                href={electionsData.state[0].electionAdministrationBody.electionInfoUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <button type="button" className="btn btn-primary">
                    Election Info
                  </button>
              </a>
            </li>

            <li className="my-3">
              <a
                href={electionsData.state[0].electionAdministrationBody.votingLocationFinderUrl}
                target="_blank"
                rel="noopener noreferrer">
                  <button type="button" className="btn btn-primary">
                    Voting Location Info
                  </button>
              </a>
            </li>

            <li className="card-text my-3">
              <p><b>{electionsData.state[0].electionAdministrationBody.name}</b></p>
              <p>{electionsData.state[0].electionAdministrationBody.correspondenceAddress.line1},</p>
              <p>
                {electionsData.state[0].electionAdministrationBody.correspondenceAddress.city}, {electionsData.state[0].electionAdministrationBody.correspondenceAddress.state}  {electionsData.state[0].electionAdministrationBody.correspondenceAddress.zip}
              </p>
            </li>

          </ul>


        </section>

      </section>

    );
  }
}

export default VoterInformation;
