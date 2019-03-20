import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      dataRecieved: null,
      url: `https://www.googleapis.com/civicinfo/v2/elections?key=${apikey}`

    }
  }

  fetchData = () => {

    fetch(this.state.url)
      .then(res => console.log(res))

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

            <section className="labelContainer">

              <label htmlFor="street1">Street Address 1:</label>
              <input type="text" name="street1"></input>

              <label htmlFor="street2">Street Address 2:</label>
              <input type="text" name="street2"></input>

              <label htmlFor="city">City:</label>
              <input type="text" name="city"></input>

              <label htmlFor="state">State:</label>
              <input type="text" name="state"></input>

              <label htmlFor="zipcode">Zip Code:</label>
              <input type="text" name="zipcode"></input>

            </section>

            <button type="submit">Get Info</button>

            { dataRecieved ?
              <p>Data Output</p>
            : null}

          </form>

        </main>

        <footer>
          <h3 className="text-secondary">Footer</h3>
        </footer>

      </section>
    );
  }
}

export default App;
