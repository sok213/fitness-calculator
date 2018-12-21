import React, { Component } from 'react';
import s from './PhysiqueSurvey.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

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
                    desc: ''
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
                <p className={s.header}>{option.type}</p>
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

                <div className={`row ${s.buttonContainer}`}>
                    <button type="button" class="btn btn-dark">
                        <span className={s.text}>Continue</span>
                        <FontAwesomeIcon 
                            icon={faAngleRight} 
                            className={s.rightIcon} 
                        />
                    </button>
                </div>
            </div>
        )
    }
}

export default PhysiqueSurvey;
