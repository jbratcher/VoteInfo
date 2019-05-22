import React, { Component } from 'react';

class MoreInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log("more info loaded");
  }


  render() {

    const {
      electedRepresentativesData,
      officialIndex
    } = this.props;

    return (
      
      <React.Fragment>
      
        <button
          className="btn btn-secondary"
          id="moreInfoButton"
          type="button"
          data-toggle="collapse"
          data-target={`#${electedRepresentativesData.officials[officialIndex].name}MoreInfo`}
          aria-expanded="true"
          aria-controls={`${electedRepresentativesData.officials[officialIndex].name}MoreInfo`}
        >
          More Info
        </button>

        <section
          className="collapse"
          id={`${electedRepresentativesData.officials[officialIndex].name}MoreInfo`}
        >

          <section>

           <h5>Mailing Address:</h5>

           {electedRepresentativesData.officials[officialIndex].address ?

             <p className="card-text">

               {electedRepresentativesData.officials[officialIndex].address[0].line1}, <br></br>
               {electedRepresentativesData.officials[officialIndex].address[0].line2}, <br></br>
               {electedRepresentativesData.officials[officialIndex].address[0].city}, <br></br>
               {electedRepresentativesData.officials[officialIndex].address[0].state}, <br></br>
               {electedRepresentativesData.officials[officialIndex].address[0].zip}

             </p>

             : 

             <p className="card-text">No address found.</p>

           }

          </section>

          <section>

           <h5>Contact Phone:</h5>

           {electedRepresentativesData.officials[officialIndex].phones ?

           <p className="card-text">

             {electedRepresentativesData.officials[officialIndex].phones[0]}

           </p>

           : 

           <p className="card-text">No phone found.</p>

           }

          </section>

        </section>
      
      </React.Fragment>
  
    );
  }
}

export default MoreInfo;

