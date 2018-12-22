import React, { Component } from 'react';
import s from './WorkoutProgram.module.scss';
import PhysiqueSurvey from './PhysiqueSurvey/PhysiqueSurvey.js';

class WorkoutProgram extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSection: 1,
            width: 0,
            height: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    nextStep = () => {
        this.setState({ activeSection: 2 });
    }

    prevStep = () => {
        this.setState({ activeSection: 1 });
    }

    isMobileAndStep2 = () => {
        if(this.state.activeSection == 2 && this.state.width < 999) {
            return '100%';
        }
    }

    render() {

        return (
            <div  
                className={s.workoutProgramContainer}
                style={{ height: this.isMobileAndStep2() }}    
            >
                <div 
                    className={`row ${s.headerContent}`} 
                    style={{ display: this.state.activeSection < 2 ? 'block' : 'none' }}
                >
                    <div className={`col-md-12 col-xl-6`}>
                        <h2>One step to Mt. Olympus</h2>
                        <p>Mount Olympus is home of the Greek gods, the ones who posses the most aesthetic physiques known to man. It is believed that one must achieve an incredible aesthetic physique, and after death, they will forever live on the peak of Mount Olympus where they can train with the best equipment and drink from the fountain of gods that forever overflow with the best pre-workout known to give the best pumps. Here, you will be provided with the first step to discovering what type of workout regime you should begin based on your body type to maybe one day reach your aesthetic potential.</p>
                    </div>
                </div>
                <div className={`row ${s.survey}`}>
                    <div className={`col-lg-12`}>
                        <PhysiqueSurvey 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkoutProgram;
