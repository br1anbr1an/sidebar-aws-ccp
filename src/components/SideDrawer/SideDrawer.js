import React, { useState, useEffect } from 'react';
import 'amazon-connect-streams';
import CCP from '../CCP/CCP';
import './SideDrawer.css';

export default function SideDrawer(props) {
  const [count, setCount] = useState(0);
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  useEffect(() => {
    connect.agent(function (agent) {

      // setAgentName(agent.getName())//Get Agent Name
      agent.onRefresh(function (agent) {
        ////console.log(agent)

      });
      agent.onStateChange((a) => {
        //{agent: Agent, oldState: "Offline", newState: "Busy"}
        //console.log('onStateChange', a)
        // setAgentStatus(a.newState);
      });
      agent.onRoutable(a => {
        //Agent on Ready
        //console.log('onRoutable', a)
      });
      agent.onNotRoutable(a => {
        //Agent on Not Ready
        //console.log('onNotRoutable', a)
      });
      agent.onOffline(a => {
        //Agent on Offline
        //console.log('onOffline', a)
      });
      agent.onError(a => {
        //Agent on Error receiving agent state
        //console.log('onError', a)
      });
      agent.onSoftphoneError(a => {
        //Agent unable to open softphone connection
        //console.log('onSoftphoneError', a)
      });
      agent.onAfterCallWork(a => {
        //Agent ACW status
        //console.log('onAfterCallWork', a)
      });
      agent.onContactPending(a => {
        //Agent Has Pending Contact
        //console.log('onContactPending', a)
      });
    });
  });

  return (
    <nav className={drawerClasses}>
      <CCP />
    </nav>
  );
}