import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path="/">
              <Navbar/>
              <Home/>
        </Route>

        <Route exact path="/about">
 
        
        </Route>

      </Switch>
    </div>
</Router>
  );
}

export default App;
