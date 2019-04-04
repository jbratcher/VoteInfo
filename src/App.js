import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets';
import AddressForm from './AddressForm';
import UserAddress from './UserAddress';
import VoterInformation from './VoterInformation';
import Race from './Race';
import Referendum from './Referendum'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      electionsData: null,
      electionsDataRecieved: false,
      street1: undefined,
      street2: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
      votingData: null,
      votingDataRecieved: false

    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchElectionData();
    this.fetchVoterData();
  }

  fetchElectionData = () => {

    const {street1, city, state} = this.state;

    fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=${apikey}&address=${street1}.${city} ${state}`)
      .then(res => res.json())
      .then(electionsData => {
        this.setState({
          electionsData: electionsData,
          electionsDataRecieved: true
        });
      })
      .catch(error => console.log(error));
  }

  fetchVoterData = () => {

    const {street1, city, state} = this.state;
    let votingUrl = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${apikey}&address=${street1}.${city} ${state}&electionId=2000`;

    fetch(votingUrl)
      .then(res => res.json())
      .then((votingData) => {
        this.setState({
          votingData: votingData,
          votingDataRecieved: true
        });
      })
      .catch(error => console.log(error));

  }

  componentDidMount() {
    console.log("App loaded");
  }


  render() {

    const {
      votingData,
      votingDataRecieved
    } = this.state;

    return (

      <section className="app">

        <header role="banner" aria-label="header">
          <h1 className="text-primary display-4 my-2">VoteInfo</h1>
        </header>

        <main role="main" aria-label="main">

          <AddressForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />

          { votingDataRecieved ?

            <section className="card">
            
              <section className="votingInformation">

                <UserAddress
                  votingData={votingData}
                />
  
                <VoterInformation
                  votingData={votingData}
                />
                
              </section>
              
              <section className="electionsInformation mx-auto">
                  
                <Race
                  votingData={votingData}
                />
                
                <Referendum
                  votingData={votingData}
                />

              </section>

            </section>

          :
            
            <section className="informationPlaceholder card text-muted">
           
              <h4 className="card-title">Please enter your address in the form</h4>
              <p className="card-text">Your voting and election information will appear here</p>
              
            </section>
            
          }

        </main>

        <footer>
          <h3 className="text-secondary">VoteInfo 2019</h3>
        </footer>

      </section>

    );
  }
}

export default App;
