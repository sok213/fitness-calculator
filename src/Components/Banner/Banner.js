import React, { Component } from 'react';
import s from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Banner extends Component {

    render() {
        return (
            <div className={`
                ${s.bannerContainer} 
                container-fluid
            `}>
                <div className={`row`}>
                    <div className={`col-lg-12 ${s.header}`}>
                        <div className={s.headerContent}>
                            <h1>Are you ready to reach your <span className={s.aesthetic}>aesthetic</span> potential?</h1>
                            <p>You have one life to live and a life should never be lived without ever experiencing your fullest potential. Your physique is a symbol of your lifestyle and who you are as a person. For some, it may take harder work than others, but generally speaking, everyone can achieve an amazing healthy physique that could drastically improve their life and well-being. Here, you will find simple guidance on how to embark on your first step to reaching your aesthetic potential.</p>
                        </div>
                    </div>
                </div>
                <div className={`row`} style={{ textAlign: 'center'}}>
                    <div className={`col-lg-12 ${s.getStartedCta}`}>
                        <button 
                            type="button" 
                            className={`btn btn-dark ${s.startCta}`}
                        >
                            <FontAwesomeIcon icon={faChevronDown} className={s.downIcon} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
