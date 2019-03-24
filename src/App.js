import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets';
import AddressForm from './AddressForm';
import UserAddress from './UserAddress';
import Race from './Race';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      dataRecieved: null,
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
  }


  render() {

    const {
      data,
      dataRecieved
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

          { dataRecieved ?

          <section className="card">

            <UserAddress
              data={data}
            />

            <h4
              className="listHeader py-3 mb-3 card-title"
              type="button"
              data-toggle="collapse"
              data-target="#senatorRace"
              aria-expanded="true"
              aria-controls="#senatorRace"
            >
              Candidate Races for Office
            </h4>

            <Race
              data={data}
            />

          </section>

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
