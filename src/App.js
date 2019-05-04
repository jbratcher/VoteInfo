import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets';
import Header from './components/Header';
import Footer from './components/Footer';
import VoterAddresses from './components/VoterAddresses';
import VoterInformation from './components/VoterInformation';
import OfficeRaces from './components/OfficeRaces';
import Referendum from './components/Referendum';
import ElectedRepresentatives from './components/ElectedRepresentatives';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      addressSubmitted: false,
      electionsData: null,
      electionsDataRecieved: false,
      electedRepresentativesData: null,
      electedRepresentativesDataRecieved: false,
      street1: undefined,
      street2: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
      votingData: null,
      votingDataArray: null,
      votingDataRecieved: false

    };
  }

  addressReset = () => {
    this.setState({
      addressSubmitted: false,
      street1: "",
      street2: "",
      city: "",
      state: "",
      country: ""
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchElectionData();
    this.fetchElectedRepresentativesData();
    this.fetchVoterData();
    this.setState(prevState => ({
      addressSubmitted: !this.state.addressSubmitted
    }))
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

  fetchElectedRepresentativesData = () => {

    const {street1, city, state} = this.state;

    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apikey}&address=${street1}.${city} ${state}`)
      .then(res => res.json())
      .then(electedRepresentativesData => {
        this.setState({
          electedRepresentativesData: electedRepresentativesData,
          electedRepresentativesDataRecieved: true
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
          votingDataArray: Object.values(votingData),
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
      addressSubmitted,
      electedRepresentativesData,
      electedRepresentativesDataRecieved,
      votingData,
      votingDataArray,
      votingDataRecieved
    } = this.state;

    return (

      <section className="app">

        <Header />

        <main role="main" aria-label="main">

          <VoterAddresses 
            addressReset={this.addressReset}
            addressSubmitted={addressSubmitted}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            votingData={votingData}
            votingDataRecieved={votingDataRecieved}
          />


          { votingDataRecieved ?

            <section className="dataOutput">

              <section className="votingInformation">

                <VoterInformation
                  votingData={votingData}
                />

                <ElectedRepresentatives
                  electedRepresentativesData={electedRepresentativesData}
                  electedRepresentativesDataRecieved={electedRepresentativesDataRecieved}
                />

              </section>

              <section className="electionsInformation">

                <OfficeRaces
                  votingData={votingData}
                />

                <Referendum
                  votingData={votingData}
                  votingDataArray={votingDataArray}
                />

              </section>

            </section>

          :

            <section className="card votingInformationPlaceholder">

              <h4 className="card-title">Please enter your address in the form</h4>
              <p className="card-text">Your voting and election information will appear here</p>

            </section>

          }

        </main>

        <Footer />

      </section>

    );
  }
}

export default App;
