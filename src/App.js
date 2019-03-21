import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      dataRecieved: null,
      electionsUrl: `https://www.googleapis.com/civicinfo/v2/elections?key=${apikey}`,
      street1: "140 pope street",
      street2: "apt. 1",
      city: "louisville",
      state: "kentucky",
      country: "us",

    }
  }

  handleInputChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    console.log(e.target.name);
    this.fetchData();
  }

  fetchData = () => {

    const {street1, city, state} = this.state;
    let voterInfoUrl = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${apikey}&address=${street1}.${city} ${state}&electionId=2000`;

    fetch(voterInfoUrl)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          dataRecieved: true,
          data: data
        })
      })
      .then(() => console.log(this.state.data))
      .catch(error => console.log(error))

  }

  componentDidMount() {
    console.log("loaded");
    this.fetchData();
  }


  render() {

    const { dataRecieved } = this.state;

    return (

      <section className="app">

        <header role="heading">
          <h1 className="text-primary">VoteInfo</h1>
        </header>

        <main role="Main">

          <h2 className="display-4">Enter your address:</h2>

          <form>

            <div className="form-group">
              <label htmlFor="street1"></label>
              <input
                type="text"
                className="form-control"
                name="street1"
                aria-describedby="street1Help"
                placeholder="Street Address"
                onChange={this.handleInputChange}
              >
              </input>
              <small id="emailHelp" className="form-text text-muted"><em>ex. 1600 Pennsylvania Ave NW</em></small>
            </div>

            <div className="form-group">
              <label htmlFor="street2"></label>
              <input
                type="text"
                className="form-control"
                name="street2"
                aria-describedby="street2Help"
                placeholder="Street Address cont."
                onChange={this.handleInputChange}
              >
              </input>
              <small id="street2Help" className="form-text text-muted"><em>ex. Apt. 231</em></small>
            </div>

            <div className="form-group">
              <label htmlFor="city"></label>
              <input
                type="text"
                className="form-control"
                name="city"
                aria-describedby="cityHelp"
                placeholder="City"
                onChange={this.handleInputChange}
              >
              </input>
              <small id="cityHelp" className="form-text text-muted"><em>ex. Washington</em></small>
            </div>

            <div className="form-group">
              <label htmlFor="state"></label>
              <input
                type="text"
                className="form-control"
                name="state"
                aria-describedby="state"
                placeholder="State"
                onChange={this.handleInputChange}
              >
              </input>
              <small id="stateHelp" className="form-text text-muted"><em>ex. DC</em></small>
            </div>


            <button
              type="submit"
              className="btn btn-primary"
              onChange={this.handleSubmit}
            >
              Submit
            </button>

          </form>

          { dataRecieved ?
            <ul>
              <li>{this.state.data.normalizedInput.line1}</li>
              <li>{this.state.data.normalizedInput.city}</li>
              <li>{this.state.data.normalizedInput.state}</li>
              <li>{this.state.data.normalizedInput.zip}</li>
            </ul>
          : null}



        </main>

        <footer>
          <h3 className="text-secondary">Footer</h3>
        </footer>

      </section>
    );
  }
}

export default App;
