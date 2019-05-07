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

        <h4 className="card-title" >Voter Information</h4>

        <ul>

          <li>
            <a
              href={votingData.state[0].electionAdministrationBody.ballotInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-primary">
                View Current Ballot
              </button>
            </a>
          </li>

          <li>
            <a
              href={votingData.state[0].electionAdministrationBody.electionInfoUrl}
              target="_blank"
              rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">
                  Find Election Info
                </button>
            </a>
          </li>

          <li>
            
            <a
              href={votingData.state[0].electionAdministrationBody.votingLocationFinderUrl}
              target="_blank"
              rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">
                  Find Voting Location
                </button>
            </a>
          </li>

        </ul>

      </section>

    );
  }
}

export default VoteInfoButtons;
