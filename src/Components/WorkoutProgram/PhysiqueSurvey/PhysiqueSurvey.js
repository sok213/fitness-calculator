import React, { Component } from 'react';
import s from './PhysiqueSurvey.module.scss';

class PhysiqueSurvey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    type: 'Skinny',
                    desc: ''
                },
                {
                    type: 'Skinny Fat',
                    desc: ''
                },
                {
                    type: 'Some Muscle and Some Fat',
                    desc: 'BLEH EBLEHI LEHIFOAfd safd sfds'
                },
                {
                    type: 'Overweight',
                    desc: ''
                }
            ]
        }
    }

    renderOptionBox(option) {
        return (
            <div className={s.card}>
                <p>{option.type}</p>
                <p>{option.desc}</p>
            </div>
        )
    }

    render() {
        return (
            <div className={`${s.physiqueSurveyContainer}`}>
                <div className={s.scrollingWrapper}>
                    <div className={s.cardContainer}>
                        {this.state.options.map((option) => {
                            return this.renderOptionBox(option);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default PhysiqueSurvey;
