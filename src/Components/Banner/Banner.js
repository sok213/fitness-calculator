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
                    <div className={`col-lg ${s.header}`} style={{textAlign: 'center !important'}}>
                        <div className={s.headerContent}>
                            <h1>Are you ready to reach your aesthetic potential?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className={`row`} style={{ textAlign: 'center'}}>
                    <div className={`col-sm ${s.getStartedCta}`}>
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
