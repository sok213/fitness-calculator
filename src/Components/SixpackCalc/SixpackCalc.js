import React, { Component } from 'react';
import s from './SixpackCalc.module.scss';

class SixpackCalc extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            activeSection: 1,
            weight: null,
            bodyFatPerc: null,
            age: null
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Form has been submitted.');

        // TODO: retrive form values and set to state.

        this.setState({ activeSection: 2 });
    }

    handleBodyFatPercChange = (e) =>{
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
        return (
            <div  className={`${s.sixPackCalcContainer}`}>
                <div className={`row ${s.headerContent}`}>
                    <div className={`col-md-12 col-xl-6`}>
                        <h3>Abdominal Pack Forteller</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    </div>
                </div>
                <div className={`row ${s.summaryContainer}`}>
                    <div className={`col-md-12 col-xl-6`}>
                        <h3>Abdominal Pack Forteller</h3>
                        <ul>
                            <li>Age: {this.state.age}</li>
                            <li>Body Fat: {this.state.bodyFatPerc}</li>
                            <li>Weight: {this.state.weight}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.state.activeSection === 1 ? this.renderSection1() : this.renderSection2();
    }
}

export default SixpackCalc;
