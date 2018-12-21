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
                    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
                },
                {
                    type: 'Skinny Fat',
                    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
                },
                {
                    type: 'Average',
                    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
                },
                {
                    type: 'Overweight',
                    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
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
            </div>
        );
    }

    step2 = () => {
        return (
            <div className={s.summaryContainer}>
                <h3>Summary</h3>
                {this.renderSummary()}
                <button 
                    type="button" 
                    class="btn btn-dark"
                    onClick={this.prevStep}
                >
                    <FontAwesomeIcon 
                        icon={faAngleRight} 
                        className={s.rightIcon} 
                    />
                </button>
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
            )
        }
    }

    render() {
        return this.state.activeStep === 1 ? this.step1() : this.step2();
    }
}

export default PhysiqueSurvey;
