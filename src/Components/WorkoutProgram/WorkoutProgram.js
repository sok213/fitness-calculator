import React, { Component } from 'react';
import s from './WorkoutProgram.module.scss';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        if(this.state.activeSection === 2 && this.state.width < 999) {
            return '100%';
        }
    }

    render() {

        return (
            <div  
                className={`${s.workoutProgramContainer}`}
                style={{ height: this.isMobileAndStep2() }}
            >
                <div 
                    className={`row ${s.headerContent}`} 
                    style={{ display: this.state.activeSection < 2 ? 'flex' : 'none' }}
                >
                    <div className={`col-sm-12 col-md-8 align-self-right ${s.headerCol}`}>
                        <div className={`${s.headerTitle}`}>
                            <h2>One Step to Mount Olympus<FontAwesomeIcon icon={faMountain} className={s.mountainIcon} /></h2>
                            <div className={s.underline}></div>
                        </div>
                        <p>Mount Olympus is home of the Greek gods, the ones who posses the most aesthetic physiques known to man. It is believed that one must achieve an incredible aesthetic physique, and after death, they will forever live on the peak of Mount Olympus where they can train with the best equipment and drink from the fountain of gods that forever overflow with the best pre-workout known to give the best pumps. Here, you will be provided with the first step to discovering what type of workout regime you should begin based on your body type to maybe one day reach your aesthetic potential.</p>
                    </div>
                    <div className={s.optionsHeader}>
                        <h4>Choose your body type</h4>
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
