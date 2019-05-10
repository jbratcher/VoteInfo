import React, { Component } from 'react';

class SocialLinks extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("social links loaded");
  }


  render() {

    const {
      electedRepresentativesData,
      officialIndex
    } = this.props;

    return (

      <ul className="socialLinks">
                      
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
        
        <li>
          <a
            href={`https://twitter.com/${electedRepresentativesData.officials[officialIndex].channels[1].id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
        </li>
        
        <li>
          <a
            href={`https://youtube.com/channel/${electedRepresentativesData.officials[officialIndex].channels[2].id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <i class="fab fa-youtube-square"></i>
          </a>
        </li>
      
      </ul>

    );
  }
}

export default SocialLinks;
