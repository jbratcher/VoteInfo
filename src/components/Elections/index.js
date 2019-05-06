import React, { Component } from 'react';
import OfficeRaces from './OfficeRaces';
import Referendum from './Referendum';

class Elections extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("race loaded");
  }


  render() {

    const {
      votingData,
      votingDataArray
    } = this.props;

    return (
      
      <React.Fragment>
      
        <OfficeRaces
          votingData={votingData}
        />
        
        <Referendum
          votingData={votingData}
          votingDataArray={votingDataArray}
        />

      </React.Fragment>

    );
  }
}

export default Elections;