import React, { Component } from 'react';
import 'amazon-connect-streams';
import './CCP.css';

class CCP extends Component {
  constructor(props) {
    super(props);
    this.containerDiv = React.createRef();
  }

  componentDidMount() {



/* global connect */
connect.core.initCCP(this.containerDiv.current, {
  ccpUrl: 'https://tcsi2i.awsapps.com/connect/ccp#/',
  loginPopup: true,
  softphone: {
    allowFramedSoftphone: true
  }
});
}


  render() {
    return (
          <div className="containerDiv" ref={this.containerDiv}/>
    );
  }
}

export default CCP;