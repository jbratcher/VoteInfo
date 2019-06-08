import React, { Component } from 'react';
import UserAddress from './UserAddress';
import AddressForm from './AddressForm';

class VoterAddresses extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("voter address index loaded");
  }


  render() {

    const {
      addressReset,
      addressSubmitted,
      handleInputChange,
      handleSubmit,
      votingData,
      votingDataRecieved
    } = this.props;

    return (
      
      <React.Fragment>

        { votingDataRecieved && addressSubmitted ?
          <UserAddress
            addressReset={addressReset}
            votingData={votingData}
          />
        : <AddressForm
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  />
        }
          
      </React.Fragment>
          
    );
  }
}

export default VoterAddresses;
