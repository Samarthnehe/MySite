import React from 'react';
import './Body.css';
import SyncIcon from '@material-ui/icons/Sync';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Role from './Role'
import { useStateValue } from '../StateProvider';
import Navbar from './Navbar';
import Management from './Management';


function Body() {

    const[{selected},dispatch]=useStateValue();
    console.log(selected);
    return (
        <div className="body">
            <div className="body__nav">
                <div className="body__main" style={{paddingBottom:"5px"}}>
                    <div className="body__options" style={{borderRight:"2px solid #DADADA",paddingRight:"20px"}}><RssFeedIcon/>Permissions</div>
                    <div className="body__options"><ViewModuleIcon/>Approval Matrix</div>
                </div>
                <div className="body__sync">
                    <SyncIcon/><p style={{fontWeight:"400"}}>Last synced 15mins ago</p>
                </div>
            </div>
            {(function(){
                switch(selected){
                    case "none":
                        return <Role/>
                    case "management":
                        return <Management title="Management Team"/>
                    case "procurement":
                        return <Management title="Procurement Team"/>
                    case "project":
                        return <Management title="Project Team"/>
                    case "it":
                        return <Management title="IT Team"/>

                }
            })()}
            

        </div>
    )
}

export default Body
