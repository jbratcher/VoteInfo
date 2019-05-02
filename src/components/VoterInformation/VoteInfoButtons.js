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

        <h4 className="card-title" hidden >Voter Information</h4>

        <ul className="voteInfoButtons">

          <li>
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

          <li>
            <a
              href={votingData.state[0].electionAdministrationBody.electionInfoUrl}
              target="_blank"
              rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">
                  Election Info
                </button>
            </a>
          </li>

          <li>
            
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

      </section>

    );
  }
}

export default VoteInfoButtons;
