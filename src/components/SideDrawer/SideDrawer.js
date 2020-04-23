import React from 'react';
import 'amazon-connect-streams';
import CCP from '../CCP/CCP';
import './SideDrawer.css';

export default function SideDrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }


  return (
    <nav className={drawerClasses}>
      <CCP drawerClickHandler={props.drawerClickHandler}/>
    </nav>
  );
}