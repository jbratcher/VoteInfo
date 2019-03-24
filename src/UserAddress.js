import React, { Component } from 'react';
import './App.scss';

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
      data
    } = this.props;

    return (

      <section className="card">

        <h3 className="card-title mt-5">Results for a registered address of: </h3>

        <ul className="list-group list-group-flush mt-3 mb-5">
          <li className="card-text">{data.normalizedInput.line1}</li>
          <li className="card-text">{data.normalizedInput.line2}</li>
          <li className="card-text">{data.normalizedInput.city}</li>
          <li className="card-text">{data.normalizedInput.state}</li>
          <li className="card-text">{data.normalizedInput.zip}</li>
        </ul>

      </section>

    );
  }
}

export default UserAddress;
