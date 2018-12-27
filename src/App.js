import React, { Component } from 'react';
// import s from './App.module.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner.js';
import SixpackCalc from './Components/SixpackCalc/SixpackCalc.js';
import WorkoutProgram from './Components/WorkoutProgram/WorkoutProgram.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scroll: window.pageYOffset
		}
	}

	render() {
		return (
			<div className="App">
				<Banner />
				<WorkoutProgram />
				<SixpackCalc />
			</div>
		);
	}
}

export default App;
