import React from 'react';
import './App.css';
import Home from './Components/Home'
import Videos from './Components/Videos'
import NavBar from './Components/NavBar'
import About from './Components/About'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/videos" component={Videos}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
