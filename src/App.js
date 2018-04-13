import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.css';
import Cats from './Cats';
import MoreCats from './MoreCats.js'; //Why does it require the .js suffix here, but not anywhere else????
import MoreAdditionalCats from './MoreAdditionalCats';
import ExtraMoreAdditionalCats from './ExtraMoreAdditionalCats';
import Photo from './Photo'

class App extends Component {
    
  render() {
    return (
        <div className='App'>
            <div className='App-header'>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" ></link>
                <h1 className="header-title">In ancient times, cats were worshipped as gods. They have not forgotten this.</h1>
            </div>
            <div className='navbar'>
                <NavLink
                      to="/Cats"
                      activeClassName="selected"
                >Cats</NavLink>
        
                <NavLink
                      to="/MoreCats"
                      activeClassName="selected"
                >More Cats</NavLink>
        
                <NavLink
                      to="/MoreAdditionalCats"
                      activeClassName="selected"
                >More Additional Cats</NavLink>
        
                <NavLink
                      to="/ExtraMoreAdditionalCats"
                      activeClassName="selected"
                >Extra More Additional Cats</NavLink>
            </div>
        
            <main>
                <Switch>
                    <Route exact path='/' component={Cats}/>
                    <Route path='/Cats' component={Cats}/>
                    <Route path='/MoreCats' component={MoreCats}/>
                    <Route path='/MoreAdditionalCats' component={MoreAdditionalCats}/>
                    <Route path='/ExtraMoreAdditionalCats' component={ExtraMoreAdditionalCats}/>
        
                    <Route path='/Cats/Cat01' component={Photo}/>
                </Switch>
            </main>
        
        
        </div>
    );
  }
}

export default App;
