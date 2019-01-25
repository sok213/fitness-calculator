import React, { Component } from 'react';
import s from './Navbar.module.scss';
import { 
    Link,
    Events, 
    scrollSpy
 } from 'react-scroll';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            amountScrolled: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
        scrollSpy.update();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ amountScrolled: window.pageYOffset });
    }

    render() {
        return (
            <div 
                className={`
                    ${s.NavbarContainer}
                    ${this.state.amountScrolled > 120 ? s.active : s.nonActive }    
                `} 
            >
                <ul className={s.mainNav}>
                    <li>
                        <Link 
                            activeClass={s.navActive}
                            to="purpose" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            Purpose
                            <div className={s.navUnderline}></div>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass={s.navActive}
                            to="talent" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            Talent
                            <div className={s.navUnderline}></div>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass={s.navActive}
                            to="impact" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            Impact
                            <div className={s.navUnderline}></div>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass={s.navActive}
                            to="hq" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            HQ
                            <div className={s.navUnderline}></div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
