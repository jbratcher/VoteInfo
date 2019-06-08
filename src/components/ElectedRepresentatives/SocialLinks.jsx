import React, { Component } from 'react';

class SocialLinks extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    const {
      electedRepresentativesData,
      officialIndex
    } = this.props;

    return (
      
      <React.Fragment>
      
        { electedRepresentativesData.officials[officialIndex].channels ?
  
        <ul className="socialLinks">
        
          { electedRepresentativesData.officials[officialIndex].channels[0] ?
        
          <li>
            <a
              href={`https://facebook.com/${electedRepresentativesData.officials[officialIndex].channels[0].id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          
          : null }
          
          { electedRepresentativesData.officials[officialIndex].channels[1] ?
  
          <li>
            <a
              href={`https://twitter.com/${electedRepresentativesData.officials[officialIndex].channels[1].id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </li>
          
          : null }
          
          { electedRepresentativesData.officials[officialIndex].channels[2] ?
          
          <li>
            <a
              href={`https://youtube.com/channel/${electedRepresentativesData.officials[officialIndex].channels[2].id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <i className="fab fa-youtube-square"></i>
            </a>
          </li>
          
          : null }
        
        </ul>
        
        : null }
      
      </React.Fragment>
  
    );
  }
}

export default SocialLinks;
