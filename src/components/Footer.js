import React, { Component } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  componentDidMount() {
    console.log("Header loaded");
  }


  render() {

    return (

        <footer role="contentinfo" aria-label="footer">

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

    );
  }
}

export default Footer;
