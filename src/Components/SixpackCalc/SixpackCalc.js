import React, { Component } from 'react';
import s from './SixpackCalc.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Animated } from "react-animated-css";
import caliper from './../../assets/caliper.jpeg';

class SixpackCalc extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeSection: 1,
            weight: '',
            bodyFatPerc: '',
            age: '',
            currentLeanBodyMass: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ activeSection: 2 });
    }

    handleBodyFatPercChange = (e) => {
        this.setState({ bodyFatPerc: e.target.value });
    }

    handleAgeChange = (e) => {
        this.setState({ age: e.target.value });
    }

    handleWeightChange = (e) => {
        this.setState({ weight: e.target.value });
    }

    helpCta = (e) => {
        e.preventDefault();
        this.setState({ activeSection: 3 });
    }

    renderSection1 = () => {
        return (
            <div className={`${s.sixPackCalcContainer}`} key={1}>
                <div className={`row ${s.headerContent}`} key={2}>
                    <div className={`col-md-12 col-xl-6`}>
                        <div className={s.headerTitle}>
                            <h2>Six Pack Calculator</h2>
                            <div className={s.underline}></div>
                        </div>
                        <p>Having visible abs is one of the most crucial components that determines whether a physique is aesthetic or just average. It can be difficult to do your own research to figure out how much weight to lose to have your abs show. Fortunately, we have created a tool to make your life easier! Our sophisticated Six Pack Calculator tool will calculate how much weight you need to lose and how many weeks it will take for you to obtain visible abs based on your current body stats.</p>
                    </div>
                </div>
                <div className={`row ${s.calculator}`}>
                    <div className={s.formContainer}>
                        <Animated animationIn="fadeIn" animationOut="fadeOut" key={3}>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="bodyfatperc" className={s.formHeader}>Body Fat Percentage</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="bodyfatperc" 
                                        placeholder="Enter body fat %"
                                        value={this.state.bodyFatPerc}
                                        onChange={this.handleBodyFatPercChange}
                                        required
                                    />
                                    <div className={s.helpCta}>
                                        <small>
                                            <a
                                                href="/" 
                                                onClick={this.helpCta.bind(this)}
                                            >
                                                I need help finding my body fat percentage
                                            </a>
                                        </small>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="weight" className={s.formHeader}>Weight</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="weight" 
                                        placeholder="Enter your weight"
                                        value={this.state.weight}
                                        onChange={this.handleWeightChange}
                                        required
                                    />
                                </div>
                                <div className={s.buttonContainer}>
                                    <button 
                                        type="submit" 
                                        className={`btn btn-dark ${s.submitCta}`}
                                    >
                                        See Results
                                    </button>
                                </div>
                            </form>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }

    renderSection2 = () => {
        const weight = this.state.weight;
        const bfp = this.state.bodyFatPerc;
        const currentLeanBodyMass = Math.round(weight * (1 - (bfp * 0.01)));
        const goalLeanBodyMass = currentLeanBodyMass * 0.97;
        const goalWeight = Math.round(goalLeanBodyMass / (1 - 0.12));
        const rateOfWeightLossPerWeek = (weight * 0.005).toFixed(1);
        const rateOfWeightLossPerWeekIntense = (weight * 0.01).toFixed(1);
        const tt6 = Math.round((weight - goalWeight) / rateOfWeightLossPerWeek);
        const tt6Months = Math.round(tt6 / 4);
        const tt6V2 = Math.round((weight - goalWeight) / rateOfWeightLossPerWeekIntense);
        const tt6V2Months = Math.round(tt6V2 / 4);


        if(currentLeanBodyMass >= goalWeight || bfp < 13) {
            return (
                <div className={`${s.sixPackCalcContainer}`} key={4}>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" key={5}>
                        <div className={`row`} key={6}> 
                            <div className={`col-md-12 ${s.summaryContainer}`} key={7}>
                                <h2>Six Pack Calculator</h2>
                                <p>Your lean body mass is <span className={s.boldMe}>{currentLeanBodyMass}</span> and your body fat percentage is <span className={s.boldMe}>{bfp}%</span> which means that you should already have visible defined abs. You should not consider losing anymore weight! If you do not have visible abs, perhaps you should eat more food and lift heavier weights.</p>
                            </div>
                        </div>
                        <div className={`row`} key={8}>
                            <div className={s.returnButtonContainer}>
                                <button 
                                    type="button" 
                                    className="btn btn-dark"
                                    onClick={this.prevStep}
                                >
                                    <FontAwesomeIcon 
                                        icon={faUndoAlt} 
                                        className={s.prevIcon} 
                                    />
                                </button>
                            </div>
                        </div>
                    </Animated>
                </div>
            );
        }
        return (
            <div className={`${s.sixPackCalcContainer}`} key={9}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" key={10}>
                    <div className={`row`} key={11}> 
                        <div className={`col-md-12 ${s.summaryContainer}`} key={12}>
                            <h2>Results</h2>
                            <p>Your lean body mass is <span className={s.boldMe}>{currentLeanBodyMass}</span> pounds which means that your goal weight to obtain well defined abs would be {goalWeight} pounds. The recommended rate of weight loss would be <span className={s.boldMe}>{rateOfWeightLossPerWeek}</span> pounds per week which would take <span className={s.boldMe}>{tt6} weeks</span> or <span className={s.boldMe}>{tt6Months} months</span>. If you want to obtain your abs a bit faster with more intense dieting and exercise, the recommended rate of weight loss would be <span className={s.boldMe}>{rateOfWeightLossPerWeekIntense}</span> pounds per week which would take <span className={s.boldMe}>{tt6V2}</span> weeks or <span className={s.boldMe}>{tt6V2Months} months</span> to obtain well defined abs and become aesthetic.</p>
                        </div>
                    </div>
                    <div className={`row`} key={13}>
                        <div className={s.returnButtonContainer}>
                            <button 
                                type="button" 
                                className="btn btn-dark"
                                onClick={this.prevStep}
                            >
                                <FontAwesomeIcon 
                                    icon={faUndoAlt} 
                                    className={s.prevIcon} 
                                />
                            </button>
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }

    renderHelpFindBfp() {
        return (
            <div className={`${s.sixPackCalcContainer}`} key={14}>
                <div className={`row ${s.helpHeaderContent}`} key={15}>
                    <div className={`col-md-6 col-xl-6`}>
                        <h3>How to Find Body Fat Percentage</h3>
                        <div className={s.imgContainer}>
                            <img src={caliper} alt="fat caliper tool" />
                        </div>
                        <p>There are various ways to measure your body fat percentage. The most effective, easiest, and most affordable way that we recommend is to purchase a <a href="https://www.amazon.com/Sequoia-Fitness-TrimCal-Caliper-Health-x/dp/B00B2MIDFY/ref=sr_1_2_a_it?ie=UTF8&qid=1545973556&sr=8-2-spons&keywords=fat+caliper&psc=1" target="_blank" rel="noopener noreferrer">fat caliper tool</a>. A fat caliper tool allows you to measure various skin folds on your body, most of them, if not all, include a spreadsheet which provides your body fat percentage based on the thickness of your skin fold.</p>
                    </div>
                </div>
                <div className={`row`} key={16}>
                    <div className={s.returnButtonContainer}>
                        <button 
                            type="button" 
                            className="btn btn-dark"
                            onClick={this.prevStep}
                        >
                            <FontAwesomeIcon 
                                icon={faUndoAlt} 
                                className={s.prevIcon} 
                            />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    prevStep = () => {
        this.setState({ activeSection: 1});
    }

    render() {
        if(this.state.activeSection === 1) {
            return this.renderSection1();
        } else if (this.state.activeSection === 2) {
            return this.renderSection2();
        } else if  (this.state.activeSection === 3) {
            return this.renderHelpFindBfp();
        }
    }
}

export default SixpackCalc;
