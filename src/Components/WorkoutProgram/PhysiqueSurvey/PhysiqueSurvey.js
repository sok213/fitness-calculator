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
                    {this.renderSummary()}
                    <div className={`row`}>
                        <div className={s.returnButtonContainer}>
                            <button 
                                type="button" 
                                class="btn btn-dark"
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
        )
    }

    continue = () => {
        if(this.state.selected.length < 1) {
            return null;
        }
        this.props.nextStep();
        this.setState({ activeStep: 2 });
    }

    prevStep = () => {
        this.props.prevStep();
        this.setState({ 
            activeStep: 1,
            selected: ''
        });
    }

    renderSummary = () => {
        if(this.state.selected === 'Skinny') {
            return (
                <div className={`${s.summaryContent} col-md-12 col-xl-6`}>   
                    <h3>Skinny Overview</h3>
                    <p>The best workout program skinny body types seeking to achieve an aesthetic physique is to focus on building muscle mass and not worry too much on burning calories. Workouts should primarily consist of heavy major lifts such as deadlifts, bench press, squats, along with body weight exercises such as push-ups and pull-ups. Cardio should be kept to a minimal since the focus is to gain weight in order to build a stronger and more massive body.</p>

                    <p>Diet is very crucial to making sure your body properly recovers after a workout, especially when you want to make muscle gains. Your diet should consist of a caloric surplus which means that you are consuming more calories than your current caloric maintenance. Nutrition should be heavy in protein and healthy fats.</p>

                    <p>Supplements are a tool to boosts your efficiency in getting results and feeling better. For skinny body types who are trying to build muscle and mass, we recommend the following products:</p>

                    <ul>
                        <li>
                            Whey Protein
                            <ul>
                                <li>Most ectomorphs have trouble eating more than they are used to. Whey Protein may be used to supplement a meal to ensure you reach your daily protein intake goal without having to force down your last meal.</li>
                            </ul>
                        </li>
                        <li>
                            Vitamin D3
                            <ul>
                                <li>Around 43% of people in the United States are vitamin D deficient, which means that there is a decent chance that you may be too. Vitamin D is crucial for testosterone production and testosterone is the key to having effective workouts and muscle development. Vitamin D3 can assist your production in testosterone and improve your energy in and out of the gym. Overall, it’s good for your health and if you’re trying to build your muscles and grow your body, this is one supplement that could significantly help.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        } else if (this.state.selected === 'Skinny Fat') {
            return (
                <div className={`${s.summaryContent} col-md-12 col-xl-6`}>   
                    <h3>Skinny Fat Overview</h3>
                    <p>The best workout program for skinny fat body types seeking to achieve an aesthetic physique is to focus on both building muscle and burning fat. The goal should be to build a good amount of muscle and to also decrease your overall body fat percentage. Fortunately, building muscle is an efficient way to also burn fat. Workouts should primarily consist of heavy major lifts such as deadlifts, bench press, squats, along with body weight exercises such as push-ups and pull-ups. Some cardio should be added to your workouts to help burn calories and improve metabolism.</p>

                    <p>Diet should be protein heavy, keep the fats to a medium, and make sure that you are consuming a minimal amount of carbs. Calories should be slightly above your current maintenance calories for muscle recovery and strength gains. One amazing tool that would greatly make your fat loss more efficient is to incorporate intermittent fasting and consider black coffee in the morning. This strategy is a great dietary supplement to burn calories and it works great to hit the gym while on an empty stomach for extra focus and efficient fat loss.</p>

                    <p>Supplements are a tool to boosts your efficiency in getting results and feeling better. For skinny fat body types who are trying to build muscle and lose stubborn fat, we recommend the following products:</p>

                    <ul>
                        <li>
                            Whey Protein
                            <ul>
                                <li>Whey Protein can help you reach your daily protein intake goal easier if you supplement a meal with a protein shake.</li>
                            </ul>
                        </li>
                        <li>
                            Pre-Workout 
                            <ul>
                                <li>Pre-Workout is an amazing supplement to boost your energy in the gym and many contain fat burning ingredients to help with getting leaner and vascular.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        } else if (this.state.selected === 'Average') {
            return (
                <div className={`${s.summaryContent} col-md-12 col-xl-6`}>   
                    <h3>Average Overview</h3>
                    <p>The best workout program for average body types that consists of some fat and some muscle is a routine that incorporates high repetition sets with medium weights. An average body type should have a decent amount of muscle, so shredding off excess stubborn fat and increasing vascularity should be the most efficient route to achieve an aesthetic physique. Workouts should primarily consist of high rep body weight exercises such as weighted pull-ups and pushups along with isolation movements such as bicep curls, bench press, and shoulder-presses. Some cardio in combination with intermittent fasting should speed up the fat burning process. Abs should be worked on at least 3 times a week.</p>

                    <p>Diet should consist of high protein, low carbs, and low fat. It is crucial to keep the carbs low for an average body type in order to get rid of the stubborn belly fat and achieve the shredded vascular look. Stay away from dairy products like milk, cheese, and pasta since those are generally the type of foods to get you bloated and difficult to get rid of stubborn belly fat.</p>

                    <p>Supplements are a tool to boosts your efficiency in getting results and feeling better. For average body types who are trying to build muscle and lose stubborn fat, we recommend the following products:</p>

                    <ul>
                        <li>
                            Pre-Workout
                            <ul>
                                <li>Pre-Workout is an amazing supplement to boost your energy in the gym and many contain fat burning ingredients to help with getting leaner and vascular.</li>
                            </ul>
                        </li>
                        <li>
                            Whey Protein
                            <ul>
                                <li>Whey Protein can help you reach your daily protein intake goal easier if you supplement a meal with a protein shake.</li>
                            </ul>
                        </li>
                        <li>
                            Black Coffee
                            <ul>
                                <li>Black coffee is great for fat loss when used in combination with intermittent fasting. Black coffee is not only great for speeding up metabolism, but also a good hunger suppressant. Perfect supplement for someone looking to lose weight and achieve a tighter waist.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        } else if (this.state.selected === 'Overweight') {
            return (
                <p>Overweight Overview</p>
            );
        }
    }

    render() {
        return this.state.activeStep === 1 ? this.step1() : this.step2();
    }
}

export default PhysiqueSurvey;
