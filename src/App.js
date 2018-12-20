import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner.js';
import SixpackCalc from './Components/SixpackCalc/SixpackCalc.js';
import WorkoutProgram from './Components/WorkoutProgram/WorkoutProgram.js';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Banner />
        <SixpackCalc />
        <WorkoutProgram />
      </div>
    );
  }
}

export default App;
