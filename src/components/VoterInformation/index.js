import React, { Component } from 'react';
import VoteInfoButtons from './VoteInfoButtons';


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

      <VoteInfoButtons 
        votingData={votingData}
      />
          
    );
  }
}

export default VoterInformation;
