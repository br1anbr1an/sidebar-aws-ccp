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

    connect.agent(function (agent) {

      // setAgentName(agent.getName())//Get Agent Name
      agent.onRefresh(function (agent) {
        console.log(agent)

      });
      agent.onStateChange((a) => {
        //{agent: Agent, oldState: "Offline", newState: "Busy"}
        console.log('onStateChange', a)
        // setAgentStatus(a.newState);
      });
      agent.onRoutable(a => {
        //Agent on Ready
        console.log('onRoutable', a)
      });
      agent.onNotRoutable(a => {
        //Agent on Not Ready
        console.log('onNotRoutable', a)
      });
      agent.onOffline(a => {
        //Agent on Offline
        console.log('onOffline', a)
      });
      agent.onError(a => {
        //Agent on Error receiving agent state
        console.log('onError', a)
      });
      agent.onSoftphoneError(a => {
        //Agent unable to open softphone connection
        console.log('onSoftphoneError', a)
      });
      agent.onAfterCallWork(a => {
        //Agent ACW status
        console.log('onAfterCallWork', a)
      });
      agent.onContactPending(a => {
        //Agent Has Pending Contact
        console.log('onContactPending', a)
      });
    });
    connect.contact(contact => {
      contact.onRefresh(c => {
        //Agent Has Pending Contact
        console.log('onRefresh', c)
      });
      contact.onIncoming(c => {
        //Agent Has Pending Contact
        console.log('onIncoming', c)
        this.props.drawerClickHandler();
      });
      contact.onPending(c => {
        //Agent Has Pending Contact
        console.log('onPending', c)
      });
      contact.onConnecting(c => {
        //Agent Has Pending Contact
        console.log('onConnecting', c)
        this.props.drawerClickHandler();
      });
      contact.onAccepted(c => {
        //Agent Has Pending Contact
        console.log('onAccepted', c)
        console.log('onAccepted', contact)
        console.log(contact.toSnapshot())
        //contactData
        //connections
        //
      });
      contact.onMissed(c => {
        //Agent Has Pending Contact
        console.log('onMissed', c)
      });
      contact.onEnded(c => {
        //Agent Has Pending Contact
        console.log('onEnded', c)
      });
      contact.onACW(c => {
        //Agent Has Pending Contact
        console.log('onACW', c)
      });
      contact.onConnected(c => {
        //Agent Has Pending Contact
        console.log('onConnected', c)
      });
  
    })
  }


  render() {
    return (
      <div className="containerDiv" ref={this.containerDiv} />
    );
  }
}

export default CCP;