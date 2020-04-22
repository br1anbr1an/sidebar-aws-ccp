import React from 'react';
import CCP from '../CCP/CCP';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <CCP/>
    </nav>
  );
};

export default sideDrawer;
