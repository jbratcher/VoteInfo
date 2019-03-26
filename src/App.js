import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets';
import AddressForm from './AddressForm';
import UserAddress from './UserAddress';
import VoterInformation from './VoterInformation';
import Race from './Race';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      electionsData: null,
      electionsDataRecieved: null,
      electionsUrl: `https://www.googleapis.com/civicinfo/v2/elections?key=${apikey}`,
      street1: undefined,
      street2: undefined,
      city: undefined,
      state: undefined,
      country: undefined

    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchElectionsData();
  }

  fetchElectionsData = () => {

    const {street1, city, state} = this.state;
    let voterInfoUrl = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${apikey}&address=${street1}.${city} ${state}&electionId=2000`;

    fetch(voterInfoUrl)
      .then(res => res.json())
      .then((electionsData) => {
        this.setState({
          electionsDataRecieved: true,
          electionsData: electionsData
        })
      })
      .then(() => console.log(this.state.electionsData))
      .catch(error => console.log(error))

  }

  componentDidMount() {
    console.log("loaded");
  }


  render() {

    const {
      electionsData,
      electionsDataRecieved
    } = this.state;

    return (

      <section className="app">

        <header role="heading">
          <h1 className="text-primary">VoteInfo</h1>
        </header>

        <main role="Main">

          <AddressForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />

          { electionsDataRecieved ?

            <section className="card">

              <UserAddress
                electionsData={electionsData}
              />

              <VoterInformation
                electionsData={electionsData}
              />

              <Race
                electionsData={electionsData}
              />

            </section>

          : null }

        </main>

        <footer>
          <h3 className="text-secondary">Footer</h3>
        </footer>

      </section>
    );
  }
}

export default App;
