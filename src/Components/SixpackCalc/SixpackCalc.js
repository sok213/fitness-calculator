import React, { Component } from 'react';
import s from './SixpackCalc.module.scss';

class SixpackCalc extends Component {

    render() {
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
                        <form>
                            <div class="form-group">
                                <label for="bodyfatperc">Body Fat Percentage</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="bodyfatperc" 
                                    placeholder="Enter body fat %" 
                                />
                            </div>
                        </form>
                        <div class="form-group">
                            <label for="age">Insert Age</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="age" 
                                placeholder="Enter your age" 
                            />
                        </div>
                        <div class="form-group">
                            <label for="weight">Weight</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="weight" 
                                placeholder="Enter weight" 
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SixpackCalc;
