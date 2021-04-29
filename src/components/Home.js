import React from 'react';
import './Home.css';
import Sidenav from './Sidenav';
import Body from './Body';

function Home() {
    return (
        <div className="home">
                <Sidenav/>
                <Body/>
        </div>
    )
}

export default Home
