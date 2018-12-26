import React, { Component } from 'react';
import s from './SixpackCalc.module.scss';

class SixpackCalc extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeSection: 1,
            weight: null,
            bodyFatPerc: null,
            age: null,
            currentLeanBodyMass: null
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
                <div className={`row ${s.headerContent}`} key={1}>
                    <div className={`col-md-12 col-xl-6`}>
                        <h3>Abdominal Pack Foreteller</h3>
                        <p>Having visible abs is one of the most crucial components that determines whether a physique is aesthetic or just average. It can be difficult to do your own research to figure out how much weight to lose to have your abs show. Fortunately, we have created a tool to make your life easier! Our sophisticated Abdominal Pack Foreteller tool will calculate how much weight you need to lose and how many weeks it will take for you to obtain visible abs based on your current body stats.</p>
                    </div>
                </div>
                <div className={`row ${s.calculator}`}>
                    <div className={s.formContainer}>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div class="form-group">
                                <label for="bodyfatperc">Body Fat Percentage</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="bodyfatperc" 
                                    placeholder="Enter body fat %"
                                    value={this.state.bodyFatPerc}
                                    onChange={this.handleBodyFatPercChange}
                                    required
                                />
                                <span>
                                    <small>
                                        <a
                                            href="#" 
                                            onClick={this.helpCta.bind(this)}
                                        >
                                            I need help finding my body fat percentage
                                        </a>
                                    </small>
                                </span>
                            </div>
                            <div class="form-group">
                                <label for="weight">Weight</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
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
                                    class={`btn btn-primary ${s.submitCta}`}
                                >
                                    See Results
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    renderSection2 = () => {
        // TODO: Generate Conclusion.
        const weight = this.state.weight;
        const bfp = this.state.bodyFatPerc;
        const currentLeanBodyMass = Math.round(weight * (1 - (bfp * 0.01)));
        const goalLeanBodyMass = currentLeanBodyMass * 0.97;
        const goalWeight = Math.round(goalLeanBodyMass / (1 - 0.12));
        const rateOfWeightLossPerWeek = Math.round(weight * 0.005);
        const rateOfWeightLossPerWeekIntense = Math.round(weight * 0.01);
        const tt6 = Math.round((weight - goalWeight) / rateOfWeightLossPerWeek);
        const tt6Months = Math.round(tt6 / 4);
        const tt6V2 = Math.round((weight - goalWeight) / rateOfWeightLossPerWeekIntense);
        const tt6V2Months = Math.round(tt6V2 / 4);

        return (
            <div className={`${s.sixPackCalcContainer}`} key={2}>
                <div className={`row`} key={2}> 
                    <div className={`col-md-12 ${s.summaryContainer}`}>
                        <h3>Abdominal Pack Fortold</h3>
                        <p>Your lean body mass is <span className={s.boldMe}>{currentLeanBodyMass}</span> pounds which means that your goal weight for well defined abs would be {goalWeight}. The recommended rate of weight loss would be <span className={s.boldMe}>{rateOfWeightLossPerWeek}</span> pounds per week which would take <span className={s.boldMe}>{tt6} weeks</span> or <span className={s.boldMe}>{tt6Months} months</span> to obtain well defined abs. If you want to obtain your abs a bit faster with more intense dieting and exercise, the recommended rate of weight loss would be <span className={s.boldMe}>{rateOfWeightLossPerWeekIntense}</span> pounds per week which would take <span className={s.boldMe}>{tt6V2}</span> weeks or <span className={s.boldMe}>{tt6V2Months} months</span> to obtain well defined abs.</p>
                    </div>
                </div>
            </div>
        );
    }

    renderHelpFindBfp() {
        return (
            <div className={`${s.sixPackCalcContainer}`} key={3}>
                <div className={`row ${s.headerContent}`} key={3}>
                    <div className={`col-md-12 col-xl-6`}>
                        <h3>How to Find Body Fat Percentage</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    </div>
                </div>
            </div>
        );
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
