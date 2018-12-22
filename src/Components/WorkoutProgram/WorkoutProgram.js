import React, { Component } from 'react';
import s from './WorkoutProgram.module.scss';
import PhysiqueSurvey from './PhysiqueSurvey/PhysiqueSurvey.js';

class WorkoutProgram extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSection: 1
        }
    }

    nextStep = () => {
        this.setState({ activeSection: 2 });
    }

    prevStep = () => {
        this.setState({ activeSection: 1 });
    }

    render() {
        return (
            <div  className={s.workoutProgramContainer}>
                {this.state.activeSection < 2 && 
                    <div className={`row`}>
                        <div className={`col-md-8 col-lg-8 col-xl-6`}>
                            <h2>One step to Mt. Olympus</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                }
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
