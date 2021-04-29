import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Image from '../images/Subtract.png';
import My from '../images/mYSITE.png';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Navbar() {
    return (
        <div className="navbar">
        <Link to="/">
       <div className="header__logo">
                <img src={Image} width="40px" height="40px"/>
               <img src={My}/>
       </div>
       </Link>

       <div className="header__nav">
           
               <div className="header__options">
            <div className="header__circle">
                </div><span style={{color:"black"}}>Kishore</span>  
               </div>
            <div>
            <div className="header__options">
                        <NotificationsNoneIcon fontSize="large"/> 
               </div>
               <div className="header__options">
                        <HelpOutlineIcon fontSize="large"/> 
               </div>
            </div>
               
         
           

       </div>
   </div>
    )
}

export default Navbar
