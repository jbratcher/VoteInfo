import React, { Component } from 'react';
import './App.scss';
import apikey from './secrets'

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
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Submit
            </button>

          </form>

          { dataRecieved ?

            <React.Fragment>

              <h3>Results for a registered address of: </h3>

              <ul>
                <li>{data.normalizedInput.line1}</li>
                <li>{data.normalizedInput.city}</li>
                <li>{data.normalizedInput.state}</li>
                <li>{data.normalizedInput.zip}</li>
              </ul>


              {data.contests.map((contest, key) => {

                console.log(key)

                return <section className="raceCandidates card" key={key}>

                  <section className="card-header" type="button" data-toggle="collapse" data-target={`#${String.fromCharCode(key+65)}`} aria-expanded="false" aria-controls={`#${String.fromCharCode(key+65)}`}>
                    <h4 className="card-title">Candidates for {contest.office}</h4>
                    <p className="card-subtitle">click to expand</p>
                  </section>

                  <ul className="collapse" id={`${String.fromCharCode(key+65)}`}>
                    {contest.candidates.map((candidate, key) => {
                      return <li key={key}>

                        <section className="card">
                          <section className="card-body">
                            <h5 className="card-title">{candidate.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{candidate.party}</h6>
                            <a href={candidate.candidateUrl} target="_blank" rel="noopener noreferrer" className="card-link">Website</a>
                          </section>
                        </section>

                      </li>
                    })}
                  </ul>

                </section>


              })}



            </React.Fragment>

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
