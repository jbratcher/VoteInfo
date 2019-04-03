import React, { Component } from 'react';

class AddressForm extends Component {

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
      handleInputChange,
      handleSubmit
    } = this.props;

    return (

      <section className="card addressForm">

        <h2 className="card-title">Enter your address:</h2>

        <form>

          <section className="form-group">
            <label htmlFor="street1"></label>
            <input
              type="text"
              className="form-control"
              name="street1"
              aria-describedby="street1Help"
              aria-label="street1"
              placeholder="Street Address"
              onChange={handleInputChange}
            >
            </input>
            <small
              id="street1Help"
              className="form-text text-muted"
            >
              <em>ex. 1600 Pennsylvania Ave NW</em>
            </small>
          </section>

          <section className="form-group">
            <label htmlFor="street2"></label>
            <input
              type="text"
              className="form-control"
              name="street2"
              aria-describedby="street2Help"
              aria-label="street2"
              placeholder="Street Address cont."
              onChange={handleInputChange}
            >
            </input>
            <small
              id="street2Help"
              className="form-text text-muted"
            >
              <em>ex. Apt. 231</em>
            </small>
          </section>

          <section className="form-group">
            <label htmlFor="city"></label>
            <input
              type="text"
              className="form-control"
              name="city"
              aria-describedby="cityHelp"
              aria-label="city"
              placeholder="City"
              onChange={handleInputChange}
            >
            </input>
            <small
              id="cityHelp"
              className="form-text text-muted"
            >
              <em>ex. Washington</em>
            </small>
          </section>

          <section className="form-group">
            <label htmlFor="state"></label>
            <input
              type="text"
              className="form-control"
              name="state"
              aria-describedby="stateHelp"
              aria-label="state"
              placeholder="State"
              onChange={handleInputChange}
            >
            </input>
            <small
              id="stateHelp"
              className="form-text text-muted"
            >
              <em>ex. DC</em>
            </small>
          </section>


          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>

        </form>

      </section>

    );
  }
}

export default AddressForm;
