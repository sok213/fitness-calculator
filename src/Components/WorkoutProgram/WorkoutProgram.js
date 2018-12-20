import React, { Component } from 'react';
import s from './WorkoutProgram.module.scss';

class WorkoutProgram extends Component {

    render() {
        return (
            <div  className={s.workoutProgramContainer}>
                <p>WorkoutProgram component.</p>
            </div>
        );
    }
}

export default WorkoutProgram;
