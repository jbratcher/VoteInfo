import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets';
import AddressForm from './AddressForm';
import UserAddress from './UserAddress';
import VoterInformation from './VoterInformation';
import OfficeRaces from './OfficeRaces';
import Referendum from './Referendum';
import ElectedRepresentatives from './ElectedRepresentatives';

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

    }
  }

  addressReset = () => {
    this.setState({
      addressSubmitted: false
    })
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

        <header role="banner" aria-label="header">

          <nav class="navbar navbar-expand-lg navbar-light">
          
            <a class="navbar-brand card" id="brand" href="#top">
              <h1>VoteInfo</h1>
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse card" id="mainNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#top">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#top">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#navbarDropdown">Action</a>
                    <a class="dropdown-item" href="#navbarDropdown">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#navbarDropdown">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
            
          </nav>

        </header>

        <main role="main" aria-label="main">

          { votingDataRecieved && addressSubmitted ?
            <UserAddress
              addressReset={this.addressReset}
              votingData={votingData}
            />
          : <AddressForm
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    />
          }


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

            <section className="card text-muted informationPlaceholder">

              <h4 className="card-title">Please enter your address in the form</h4>
              <p className="card-text">Your voting and election information will appear here</p>

            </section>

          }

        </main>

        <footer>

          <section className="subfooter py-3">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://developers.google.com/civic-information/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Civic Information API
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://www.votinginfoproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voting Information Project (VIP)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://ballotpedia.org/Main_Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ballotpedia
                </a>
              </li>
            </ul>
          </section>

          <h3 className="text-secondary py-3">VoteInfo 2019</h3>

        </footer>

      </section>

    );
  }
}

export default App;
