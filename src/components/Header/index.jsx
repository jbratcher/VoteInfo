import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (

        <header role="banner" aria-label="header">
    
          <nav className="navbar navbar-expand-lg navbar-light">
          
            <a className="navbar-brand" id="brand" href="#top">
              <h1>VoteInfo</h1>
            </a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Links
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a 
                      className="dropdown-item" 
                      href="https://ballotpedia.org/Main_Page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        Ballotpedia
                    </a>
                    <a 
                      className="dropdown-item" 
                      href="https://www.eac.gov/voters/voter-resources-helpful-links/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        Helpful Links &amp; Resources
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
          </nav>
    
        </header>

    );
  }
}

export default Header;
