import React, { Component } from 'react';
// import s from './App.module.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner.js';
import SixpackCalc from './Components/SixpackCalc/SixpackCalc.js';
import WorkoutProgram from './Components/WorkoutProgram/WorkoutProgram.js';
import Navbar from './Components/Navbar/Navbar.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			amountScrolled: window.pageYOffset
		}
	}

	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ amountScrolled: window.pageYOffset });
    }

	render() {
		return (
			<div className="App">
				{/* <Navbar /> */}
				<Banner />
				{/* eslint-disable-next-line */}
				<WorkoutProgram />
				<SixpackCalc />
			</div>
		);
	}
}

export default App;
