import React, { Component } from 'react';

class ElectionAuthorityAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("Election Authority Address loaded");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="card electionAuthorityAddress">
      
        <section className="card-body">
          <h5 className="card-title">Election Authority Address</h5>
          <p className="card-text"><b>{votingData.state[0].electionAdministrationBody.name}</b></p>
          <p className="card-text">{votingData.state[0].electionAdministrationBody.correspondenceAddress.line1},</p>
          <p className="card-text">
            {votingData.state[0].electionAdministrationBody.correspondenceAddress.city}, {votingData.state[0].electionAdministrationBody.correspondenceAddress.state}  {votingData.state[0].electionAdministrationBody.correspondenceAddress.zip}
          </p>
        </section>
        
      </section>

    );
  }
}

export default ElectionAuthorityAddress;
