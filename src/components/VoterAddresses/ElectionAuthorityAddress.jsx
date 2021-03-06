import React, { Component } from 'react';

class ElectionAuthorityAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("election authority address loaded");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="electionAuthorityAddress">
      
        <section>
          <h5>Election Authority Address</h5>
          <p><b>{votingData.state[0].electionAdministrationBody.name}</b></p>
          <p>{votingData.state[0].electionAdministrationBody.correspondenceAddress.line1},</p>
          <p>
            {votingData.state[0].electionAdministrationBody.correspondenceAddress.city}, {votingData.state[0].electionAdministrationBody.correspondenceAddress.state}  {votingData.state[0].electionAdministrationBody.correspondenceAddress.zip}
          </p>
        </section>
        
      </section>

    );
  }
}

export default ElectionAuthorityAddress;
