(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(15),a(8)),s=a(1),i=a(2),m=a(4),d=a(3),u=a(5),p=(a(16),"AIzaSyAGNAWHYmzPtl9h2vVMmLBhlD5o3Et1NCw"),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Header loaded")}},{key:"render",value:function(){return r.a.createElement("header",{role:"banner","aria-label":"header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{className:"navbar-brand",id:"brand",href:"#top"},r.a.createElement("h1",null,"VoteInfo")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mainNav","aria-controls":"mainNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"mainNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#top"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#top"},"Link")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#top",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#navbarDropdown"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#navbarDropdown"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#navbarDropdown"},"Something else here")))))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Header loaded")}},{key:"render",value:function(){return r.a.createElement("footer",{role:"contentinfo","aria-label":"footer"},r.a.createElement("section",{className:"subfooter py-3"},r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"https://developers.google.com/civic-information/",target:"_blank",rel:"noopener noreferrer"},"Google Civic Information API")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"https://www.votinginfoproject.org/",target:"_blank",rel:"noopener noreferrer"},"Voting Information Project (VIP)")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"https://ballotpedia.org/Main_Page",target:"_blank",rel:"noopener noreferrer"},"Ballotpedia")))),r.a.createElement("h3",{className:"text-secondary py-3"},"VoteInfo 2019"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("address form loaded")}},{key:"render",value:function(){var e=this.props,t=e.handleInputChange,a=e.handleSubmit;return r.a.createElement("section",{className:"card addressForm"},r.a.createElement("h2",{className:"card-title"},"Your address:"),r.a.createElement("form",null,r.a.createElement("section",{className:"form-group"},r.a.createElement("label",{htmlFor:"street1"}),r.a.createElement("input",{type:"text",className:"form-control",name:"street1","aria-describedby":"street1Help","aria-label":"street1",placeholder:"Street Address",onChange:t}),r.a.createElement("small",{id:"street1Help",className:"form-text text-muted"},r.a.createElement("em",null,"ex. 1600 Pennsylvania Ave NW"))),r.a.createElement("section",{className:"form-group"},r.a.createElement("label",{htmlFor:"street2"}),r.a.createElement("input",{type:"text",className:"form-control",name:"street2","aria-describedby":"street2Help","aria-label":"street2",placeholder:"Street Address cont.",onChange:t}),r.a.createElement("small",{id:"street2Help",className:"form-text text-muted"},r.a.createElement("em",null,"ex. Apt. 231"))),r.a.createElement("section",{className:"form-group"},r.a.createElement("label",{htmlFor:"city"}),r.a.createElement("input",{type:"text",className:"form-control",name:"city","aria-describedby":"cityHelp","aria-label":"city",placeholder:"City",onChange:t}),r.a.createElement("small",{id:"cityHelp",className:"form-text text-muted"},r.a.createElement("em",null,"ex. Washington"))),r.a.createElement("section",{className:"form-group"},r.a.createElement("label",{htmlFor:"state"}),r.a.createElement("input",{type:"text",className:"form-control",name:"state","aria-describedby":"stateHelp","aria-label":"state",placeholder:"State",onChange:t}),r.a.createElement("small",{id:"stateHelp",className:"form-text text-muted"},r.a.createElement("em",null,"ex. DC"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:a},"Submit")))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Election Authority Address loaded")}},{key:"render",value:function(){var e=this.props.votingData;return r.a.createElement("section",{className:"card electionAuthorityAddress"},r.a.createElement("section",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Election Authority Address"),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,e.state[0].electionAdministrationBody.name)),r.a.createElement("p",{className:"card-text"},e.state[0].electionAdministrationBody.correspondenceAddress.line1,","),r.a.createElement("p",{className:"card-text"},e.state[0].electionAdministrationBody.correspondenceAddress.city,", ",e.state[0].electionAdministrationBody.correspondenceAddress.state,"  ",e.state[0].electionAdministrationBody.correspondenceAddress.zip)))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("user address loaded")}},{key:"render",value:function(){var e=this.props,t=e.addressReset,a=e.votingData;return r.a.createElement("section",{className:"card userAddress"},r.a.createElement("section",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Your registration address: "),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"card-text"},a.normalizedInput.line1),a.normalizedInput.line2?r.a.createElement("li",{className:"card-text"},a.normalizedInput.line2):null,r.a.createElement("li",{className:"card-text"},a.normalizedInput.city),r.a.createElement("li",{className:"card-text"},a.normalizedInput.state),r.a.createElement("li",{className:"card-text"},a.normalizedInput.zip))),r.a.createElement("section",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:t,type:"button"},"Change Address")),r.a.createElement(h,{votingData:a}))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Vote Info Buttons loaded")}},{key:"render",value:function(){var e=this.props.votingData;return r.a.createElement("section",{className:"card-body"},r.a.createElement("h4",{className:"card-title",hidden:!0},"Voter Information"),r.a.createElement("ul",{className:"voteInfoButtons"},r.a.createElement("li",null,r.a.createElement("a",{href:e.state[0].electionAdministrationBody.ballotInfoUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Current Ballot"))),r.a.createElement("li",null,r.a.createElement("a",{href:e.state[0].electionAdministrationBody.electionInfoUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Election Info"))),r.a.createElement("li",null,r.a.createElement("a",{href:e.state[0].electionAdministrationBody.votingLocationFinderUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Voting Location Info")))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("Voter Information loaded")}},{key:"render",value:function(){var e=this.props.votingData;return r.a.createElement(g,{votingData:e})}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("race loaded")}},{key:"render",value:function(){var e=this.props.votingData;return r.a.createElement("section",{className:"card upcomingRacesCard"},r.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#upcomingRaces","aria-expanded":"true","aria-controls":"#upcomingRaces"},"Upcoming Races"),r.a.createElement("section",{className:"collapse",id:"upcomingRaces"},r.a.createElement("section",{className:"card text-center officeRaces"},e?e.contests.map(function(e,t){return e.candidates?r.a.createElement("section",{className:"card raceCandidates",key:t},r.a.createElement("h5",{className:"card-title",hidden:!0},e.office),r.a.createElement("button",{className:"btn btn-secondary",type:"button","data-toggle":"collapse","data-target":"#".concat(e.office,"upcoming"),"aria-expanded":"true","aria-controls":"#".concat(e.office,"upcoming")},e.office),r.a.createElement("section",{className:"collapse",id:"".concat(e.office,"upcoming")},r.a.createElement("section",{className:"card-body"},e.candidates.map(function(e,t){return r.a.createElement("section",{className:"card",key:t},r.a.createElement("section",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("h6",{className:"card-subtitle text-muted"},e.party),r.a.createElement("a",{href:e.candidateUrl,target:"_blank",rel:"noopener noreferrer",className:"card-link"},"Website")))})))):null}):null)))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("ballots loaded")}},{key:"render",value:function(){var e=this.props,t=e.votingData,a=e.votingDataArray;return r.a.createElement("section",{className:"card upcomingReferendumCard"},r.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#upcomingReferendum","aria-expanded":"true","aria-controls":"#upcomingReferendum"},"Upcoming Referendum"),r.a.createElement("section",{className:"collapse",id:"upcomingReferendum"},a[3].some(function(e){return"Referendum"===e.type})?t.contests.map(function(e,t){return"Referendum"===e.type?r.a.createElement("section",{className:"card referendum",key:t},r.a.createElement("button",{className:"btn btn-secondary",type:"button","data-toggle":"collapse","data-target":"#".concat(e.referendumTitle,"upcoming"),"aria-expanded":"true","aria-controls":"#".concat(e.referendumTitle,"upcoming")},e.referendumTitle),r.a.createElement("section",{className:"collapse",id:"".concat(e.referendumTitle,"upcoming")},r.a.createElement("section",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.referendumTitle),r.a.createElement("h6",{className:"card-subtitle"},e.referendumSubtitle),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:e.referendumUrl,target:"_blank",rel:"noopener noreferrer"},"Referendum Link"))))):null}):r.a.createElement("p",{className:"card-text my-auto"},"No upcoming Referendum")))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("federal representatives loaded")}},{key:"render",value:function(){var e=this.props.electedRepresentativesData;return r.a.createElement("section",{className:"card"},r.a.createElement("h4",{className:"card-title",hidden:!0},"Federal Representatives"),r.a.createElement("section",{className:"card federalRepresentativesCard"},r.a.createElement("button",{className:"btn btn-secondary",type:"button","data-toggle":"collapse","data-target":"#fedReps","aria-expanded":"true","aria-controls":"#fedReps"},"Federal Representatives"),r.a.createElement("section",{className:"collapse",id:"fedReps"},r.a.createElement("section",{className:"federalRepresentatives card-body text-center"},e?e.offices.filter(function(e){return e.levels}).filter(function(e){return"country"===e.levels[0]}).map(function(t,a){return r.a.createElement("section",{className:"card",key:t.name},t.officialIndices.map(function(a,n){return r.a.createElement("section",{className:"card",key:n},r.a.createElement("section",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},t.name)),r.a.createElement("section",{className:"card-body"},e.officials[a].photoUrl?r.a.createElement("figure",null,r.a.createElement("img",{className:"card-img-top",src:e.officials[a].photoUrl,alt:e.officials[a].name})):null,r.a.createElement("h5",{className:"card-title"},e.officials[a].name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},e.officials[a].party),r.a.createElement("a",{href:e.officials[a].urls,target:"_blank",rel:"noopener noreferrer",className:"card-link"},"Website")))}))}):null))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("state representatives loaded")}},{key:"render",value:function(){var e=this.props.electedRepresentativesData;return r.a.createElement("section",{className:"card"},r.a.createElement("h4",{className:"card-title",hidden:!0},"State Representatives"),r.a.createElement("button",{className:"btn btn-secondary",type:"button","data-toggle":"collapse","data-target":"#stateReps","aria-expanded":"true","aria-controls":"#stateReps"},"State Representatives"),r.a.createElement("section",{className:"collapse",id:"stateReps"},r.a.createElement("section",{className:"card-body text-center stateRepresentatives"},e?e.offices.filter(function(e){return e.levels}).filter(function(e){return"administrativeArea1"===e.levels[0]}).map(function(t,a){return r.a.createElement("section",{className:"card",key:t.name},t.officialIndices.map(function(a,n){return r.a.createElement("section",{className:"card",key:n},r.a.createElement("section",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},t.name)),r.a.createElement("section",{className:"card-body"},e.officials[a].photoUrl?r.a.createElement("figure",null,r.a.createElement("img",{className:"card-img-top",src:e.officials[a].photoUrl,alt:e.officials[a].name})):null,r.a.createElement("h5",{className:"card-text"},e.officials[a].name),r.a.createElement("h6",{className:"card-text text-muted"},e.officials[a].party),r.a.createElement("a",{href:e.officials[a].urls,target:"_blank",rel:"noopener noreferrer",className:"card-link"},"Website")))}))}):null)))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("local representatives loaded")}},{key:"render",value:function(){var e=this.props.electedRepresentativesData;return r.a.createElement("section",{className:"card"},r.a.createElement("h4",{className:"card-title",hidden:!0},"Local Representatives"),r.a.createElement("button",{className:"btn btn-secondary",type:"button","data-toggle":"collapse","data-target":"#localReps","aria-expanded":"true","aria-controls":"#localReps"},"Local Representatives"),r.a.createElement("section",{className:"collapse",id:"localReps"},r.a.createElement("section",{className:"card-body text-center localRepresentatives"},e?e.offices.filter(function(e){return!e.levels}).map(function(t,a){return r.a.createElement("section",{className:"card",key:t.name},t.officialIndices.map(function(a,n){return r.a.createElement("section",{className:"card",key:n},r.a.createElement("section",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},t.name)),r.a.createElement("section",{className:"card-body"},e.officials[a].photoUrl?r.a.createElement("figure",null,r.a.createElement("img",{className:"card-img-top",src:e.officials[a].photoUrl,alt:e.officials[a].name})):null,r.a.createElement("h5",{className:"card-text"},e.officials[a].name),r.a.createElement("h6",{className:"card-text mb-2 text-muted"},e.officials[a].party),r.a.createElement("a",{href:e.officials[a].urls,target:"_blank",rel:"noopener noreferrer",className:"card-link"},"Website")))}))}):null)))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("elected representatives loaded")}},{key:"render",value:function(){var e=this.props.electedRepresentativesData;return r.a.createElement("section",{className:"card electedRepresentatives"},r.a.createElement("h4",{className:"card-title",hidden:!0},"Elected Representatives"),r.a.createElement("section",{className:"card representativesCard"},r.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#electedRepresentatives","aria-expanded":"true","aria-controls":"#electedRepresentatives"},"Your Representatives"),r.a.createElement("section",{className:"collapse",id:"electedRepresentatives"},e?r.a.createElement("section",null,r.a.createElement(k,{electedRepresentativesData:e}),r.a.createElement(O,{electedRepresentativesData:e}),r.a.createElement(R,{electedRepresentativesData:e})):null)))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addressReset=function(){a.setState({addressSubmitted:!1,street1:"",street2:"",city:"",state:"",country:""})},a.handleInputChange=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.fetchElectionData(),a.fetchElectedRepresentativesData(),a.fetchVoterData(),a.setState(function(e){return{addressSubmitted:!a.state.addressSubmitted}})},a.fetchElectionData=function(){var e=a.state,t=e.street1,n=e.city,r=e.state;fetch("https://www.googleapis.com/civicinfo/v2/elections?key=".concat(p,"&address=").concat(t,".").concat(n," ").concat(r)).then(function(e){return e.json()}).then(function(e){a.setState({electionsData:e,electionsDataRecieved:!0})}).catch(function(e){return console.log(e)})},a.fetchElectedRepresentativesData=function(){var e=a.state,t=e.street1,n=e.city,r=e.state;fetch("https://www.googleapis.com/civicinfo/v2/representatives?key=".concat(p,"&address=").concat(t,".").concat(n," ").concat(r)).then(function(e){return e.json()}).then(function(e){a.setState({electedRepresentativesData:e,electedRepresentativesDataRecieved:!0})}).catch(function(e){return console.log(e)})},a.fetchVoterData=function(){var e=a.state,t=e.street1,n=e.city,r=e.state,c="https://www.googleapis.com/civicinfo/v2/voterinfo?key=".concat(p,"&address=").concat(t,".").concat(n," ").concat(r,"&electionId=2000");fetch(c).then(function(e){return e.json()}).then(function(e){a.setState({votingData:e,votingDataArray:Object.values(e),votingDataRecieved:!0})}).catch(function(e){return console.log(e)})},a.state={addressSubmitted:!1,electionsData:null,electionsDataRecieved:!1,electedRepresentativesData:null,electedRepresentativesDataRecieved:!1,street1:void 0,street2:void 0,city:void 0,state:void 0,country:void 0,votingData:null,votingDataArray:null,votingDataRecieved:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("App loaded")}},{key:"render",value:function(){var e=this.state,t=e.addressSubmitted,a=e.electedRepresentativesData,n=e.electedRepresentativesDataRecieved,c=e.votingData,l=e.votingDataArray,o=e.votingDataRecieved;return r.a.createElement("section",{className:"app"},r.a.createElement(f,null),r.a.createElement("main",{role:"main","aria-label":"main"},o&&t?r.a.createElement(E,{addressReset:this.addressReset,votingData:c}):r.a.createElement(v,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit}),o?r.a.createElement("section",{className:"dataOutput"},r.a.createElement("section",{className:"votingInformation"},r.a.createElement(N,{votingData:c}),r.a.createElement(D,{electedRepresentativesData:a,electedRepresentativesDataRecieved:n})),r.a.createElement("section",{className:"electionsInformation"},r.a.createElement(y,{votingData:c}),r.a.createElement(j,{votingData:c,votingDataArray:l}))):r.a.createElement("section",{className:"card text-muted informationPlaceholder"},r.a.createElement("h4",{className:"card-title"},"Please enter your address in the form"),r.a.createElement("p",{className:"card-text"},"Your voting and election information will appear here"))),r.a.createElement(b,null))}}]),t}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/VoteInfo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/VoteInfo","/service-worker.js");x?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):A(t,e)})}}()},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.43cb1f0f.chunk.js.map