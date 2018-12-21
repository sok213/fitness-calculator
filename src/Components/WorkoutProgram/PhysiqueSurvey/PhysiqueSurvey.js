import React, { Component } from 'react';
import s from './PhysiqueSurvey.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Animated } from "react-animated-css";

class PhysiqueSurvey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    type: 'Skinny',
                    desc: 'You have almost no muscles in sight and very minimal amount of fat on your body. You may have visible abs, but you are very thin and have no mass.'
                },
                {
                    type: 'Skinny Fat',
                    desc: 'Your body consist of mostly skin with some blubber underneath with almost no muscle. You look as soft as a house cat.'
                },
                {
                    type: 'Average',
                    desc: 'You don’t stand out in any way. You are not fat, neither muscular, just something in between.'
                },
                {
                    type: 'Overweight',
                    desc: 'Your body consist of high body fat percentage. You are soft and heavy. You struggle to run a mile and your stomach pops out more than your chest.'
                }
            ],
            selected: '',
            activeStep: 1
        }
    }

    selectOption = (option) => {
        this.setState({ selected: option });
    }

    renderOptionBox(option) {
        return (
            <div 
                className={`
                    ${s.card} 
                    ${this.state.selected === option.type ? s.selected : null}
                `}
                onClick={this.selectOption.bind(this, option.type)}
            >
                <p className={s.header}>{option.type}</p>
                <p>{option.desc}</p>
            </div>
        )
    }

    step1 = () => {
        return (
            <div className={`${s.physiqueSurveyContainer}`}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" key={1}>
                    <div className={s.scrollingWrapper}>
                        <div className={s.cardContainer}>
                            {this.state.options.map((option) => {
                                return this.renderOptionBox(option);
                            })}
                        </div>
                    </div>
                    <div className={`row ${s.buttonContainer}`}>
                        <button 
                            type="button" 
                            class="btn btn-dark"
                            onClick={this.continue}    
                        >
                            <span className={s.text}>Continue</span>
                            <FontAwesomeIcon 
                                icon={faAngleRight} 
                                className={s.rightIcon} 
                            />
                        </button>
                    </div>
                </Animated>
            </div>
        );
    }

    step2 = () => {
        return (
            <div className={s.summaryContainer}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" key={2}>
                    <h3>Summary</h3>
                    {this.renderSummary()}
                    <button 
                        type="button" 
                        class="btn btn-dark"
                        onClick={this.prevStep}
                    >
                        <FontAwesomeIcon 
                            icon={faUndoAlt} 
                            className={s.rightIcon} 
                        />
                    </button>
                </Animated>
            </div>
        )
    }

    continue = () => {
        if(this.state.selected.length < 1) {
            return null;
        }

        this.setState({ activeStep: 2 });
    }

    prevStep = () => {
        this.setState({ 
            activeStep: 1,
            selected: ''
        });
    }

    renderSummary = () => {
        if(this.state.selected === 'Skinny') {
            return (
                <p>Skinny Summary</p>
            );
        } else if (this.state.selected === 'Skinny Fat') {
            return (
                <p>Skinny Fat Summary</p>
            );
        } else if (this.state.selected === 'Average') {
            return (
                <p>Average Summary</p>
            );
        } else if (this.state.selected === 'Overweight') {
            return (
                <p>Overweight Summary</p>
            );
        }
    }

    render() {
        return this.state.activeStep === 1 ? this.step1() : this.step2();
    }
}

export default PhysiqueSurvey;
