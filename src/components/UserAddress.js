import React, { Component } from 'react';
import ElectionAuthorityAddress from './VoterInformation/ElectionAuthorityAddress';

class UserAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("user address loaded");
  }


  render() {

    const {
      addressReset,
      votingData
    } = this.props;

    return (
      
        <section className="card userAddress">
  
          <section className="card-body">
  
            <h4 className="card-title">Your registration address: </h4>
  
            <ul className="list-group list-group-flush">
              <li className="card-text">{votingData.normalizedInput.line1}</li>
              { votingData.normalizedInput.line2 ?
                <li className="card-text">{votingData.normalizedInput.line2}</li>
              : null }
              <li className="card-text">{votingData.normalizedInput.city}</li>
              <li className="card-text">{votingData.normalizedInput.state}</li>
              <li className="card-text">{votingData.normalizedInput.zip}</li>
            </ul>
  
          </section>
  
          <section className="card-footer">
  
            <button 
              className="btn btn-outline-secondary"
              onClick={addressReset}
              type="button"
            >
              Change Address
            </button>
  
          </section>
          
          <ElectionAuthorityAddress 
            votingData={votingData}
          />
  
        </section>
        
    );
  }
}

export default UserAddress;
