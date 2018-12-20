import React, { Component } from 'react';
import s from './Banner.module.scss';

class Banner extends Component {

    render() {
        return (
            <div className={s.bannerContainer}>
                <p>Banner</p>
            </div>
        );
    }
}

export default Banner;
