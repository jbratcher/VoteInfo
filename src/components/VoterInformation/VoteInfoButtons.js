import React, { Component } from 'react';

class VoteInfoButtons extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("Vote Info Buttons loaded");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="card-body voteInfoButtons">

        <h4 className="card-title" hidden>Voter Information</h4>

        <ul>

          <li>
            <a
              href={votingData.state[0].electionAdministrationBody.ballotInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Current Ballot
            </a>
          </li>

          <li>
            <a
              href={votingData.state[0].electionAdministrationBody.electionInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Election Info
            </a>
          </li>

          <li>
            
            <a
              href={votingData.state[0].electionAdministrationBody.votingLocationFinderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Voting Location
            </a>
          </li>

        </ul>

      </section>

    );
  }
}

export default VoteInfoButtons;
