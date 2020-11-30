import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import Navbar from './components/Navbar'
import BeerDetails from './components/BeerDetails';
import AddBeer from './components/AddBeer';
import RandomBeer from './components/RandomBeer';
function App() {
  return (
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/beers/add' component={AddBeer} />
        <Route exact path='/beers/random' component={RandomBeer} />
        <Route path='/beers/:id' component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
