import React from 'react';
import './Sidenav.css';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SecurityIcon from '@material-ui/icons/Security';

function Sidenav() {
    return (
        <div className="sidenav">
            <div className="sidenav__obj"><AccountTreeIcon/>Projects</div>
            <div className="sidenav__obj"><BusinessCenterIcon/>Organisation Profile</div>
            <div className="sidenav__obj"><SecurityIcon/>Access Control</div>
        </div>
    )
}

export default Sidenav
