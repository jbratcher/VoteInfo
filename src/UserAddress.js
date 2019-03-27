import React, { Component } from 'react';

class UserAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    console.log("address form");
  }


  render() {

    const {
      votingData
    } = this.props;

    return (

      <section className="card userAddress">

        <section className="card-body">

          <h4 className="card-title p-1">Voter registration address: </h4>

          <ul className="list-group list-group-flush pt-3 pb-4">
            <li className="card-text">{votingData.normalizedInput.line1}</li>
            <li className="card-text">{votingData.normalizedInput.line2}</li>
            <li className="card-text">{votingData.normalizedInput.city}</li>
            <li className="card-text">{votingData.normalizedInput.state}</li>
            <li className="card-text">{votingData.normalizedInput.zip}</li>
          </ul>

        </section>

      </section>

    );
  }
}

export default UserAddress;
