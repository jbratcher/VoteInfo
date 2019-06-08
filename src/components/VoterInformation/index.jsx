import React, { Component } from 'react';
import VoteInfoLinks from './VoteInfoLinks';


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

      <VoteInfoLinks 
        votingData={votingData}
      />
          
    );
  }
}

export default VoterInformation;
