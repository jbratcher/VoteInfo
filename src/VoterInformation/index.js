import React, { Component } from 'react';
import VoteInfoButtons from './VoteInfoButtons';
import ElectionAuthorityAddress from './ElectionAuthorityAddress';


class VoterInformation extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("Voter Information loaded");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="card voterInformation">

        <VoteInfoButtons 
          votingData={votingData}
        />

        <ElectionAuthorityAddress 
          votingData={votingData}
        />
          
      </section>

    );
  }
}

export default VoterInformation;
