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
        console.log('Form has been submitted.');
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

    renderSection1 = () => {
        return (
            <div  className={`${s.sixPackCalcContainer}`}>
                <div className={`row ${s.headerContent}`}>
                    <div className={`col-md-12 col-xl-6`}>
                        <h3>Abdominal Pack Forteller</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
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
                            </div>
                            <div class="form-group">
                                <label for="age">Age</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="age" 
                                    placeholder="Enter your age"
                                    value={this.state.age}
                                    onChange={this.handleAgeChange}
                                    required
                                />
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
                                <button type="submit" class={`btn btn-primary ${s.submitCta}`}>See Results</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    renderSection2 = () => {

        // TODO: 
        // 3) Calculate Time to six pack.
        // 4) Generate Conclusion.

        const weight = this.state.weight;
        const bfp = this.state.bodyFatPerc;
        const currentLeanBodyMass = Math.round(weight * (1 - (bfp * 0.01)));
        const goalLeanBodyMass = currentLeanBodyMass * 0.97;
        const goalWeight = Math.round(goalLeanBodyMass / (1 - 0.12));

        const rateOfWeightLossPerWeek = Math.round(weight * 0.005);
        const rateOfWeightLossPerWeekIntense = Math.round(weight * 0.01);

        const tt6 = Math.round((weight - goalWeight) / rateOfWeightLossPerWeek);

        const tt6V2 = Math.round((weight - goalWeight) / rateOfWeightLossPerWeekIntense);

        return (
            <div  className={`${s.sixPackCalcContainer}`}>
                <div className={`row ${s.summaryContainer}`}> 
                    <div className={`col-md-12 col-xl-6`}>
                        <h3>Abdominal Pack Forteller</h3>
                        <p>Provided Stats: </p>
                        <ul>
                            <li>Age: {this.state.age}</li>
                            <li>Body Fat: {this.state.bodyFatPerc}</li>
                            <li>Weight: {this.state.weight}</li>
                        </ul>
                        <p>Results:</p>
                        <ul>
                            <li>Lean Body Mass: {currentLeanBodyMass}</li>
                            <li>Goal Weight: {goalWeight}</li>
                            <li>Time to Six Pack: {tt6} weeks ({Math.round(tt6 / 4)} months) at a rate of losing {rateOfWeightLossPerWeek} pounds per week.</li>
                            <li>Time to Six Pack Intense: {tt6V2} weeks ({Math.round(tt6V2 / 4)} months) at a rate of losing {rateOfWeightLossPerWeekIntense} pounds per week.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return this.state.activeSection === 1 ? this.renderSection1() : this.renderSection2();
    }
}

export default SixpackCalc;
