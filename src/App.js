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
        })
      })
      .then(data => console.log(this.state.electionsData))
      .catch(error => console.log(error))
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
      .then(() => console.log(this.state.votingData))
      .catch(error => console.log(error));

  }

  componentDidMount() {
    console.log("loaded");
  }


  render() {

    const {
      votingData,
      votingDataRecieved
    } = this.state;

    return (

      <section className="app">

        <header role="heading">
          <h1 className="text-primary display-4 my-2">VoteInfo</h1>
        </header>

        <main role="Main">

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
              
                <h4 className="mt-3 mb-1">Upcoming Races</h4>
                  
                <Race
                  votingData={votingData}
                />

              </section>

            </section>

          : null }

        </main>

        <footer>
          <h3 className="text-secondary">VoteInfo 2019</h3>
        </footer>

      </section>

    );
  }
}

export default App;
