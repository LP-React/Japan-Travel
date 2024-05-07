import React from 'react'
import {Link} from 'react-router-dom';

export const Nav = () => {

    const Logo = () => {
        return (
            <div className="nav__logo">
                <Link className="link" to="/">
                    <img src="./assets/Icons/Loge.png" alt="Global-Travel" className="logo" />
                    <span className="nav__logo__span">Global-Travel</span>
                </Link>
            </div>
        )
    };

    const NavLink = ({ to, text }) => {
        return (
            <li className="nav__links__ul__li">
                <Link to={to} className="link">{text}</Link>
            </li>
        )
    }

    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/Gallery', text: 'Gallery' },
        { to: '/Reviews', text: 'Reviews' },
        { to: '/AboutUs', text: 'About Us' },
        /* { to: '/Contact', text: 'Contact' }, */
    ]

    const LanguageOption = ({ to, text }) => {
        return (
            <Link to={to} className="link nav__language__option">{text}</Link>
        )
    };



    return (
        <>
            <div className="container__nav">
                <nav className="nav">
                    <Logo />
                    <ul className="nav__links__ul">
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <NavLink to={link.to} key={index} text={link.text}/>
                                )
                            })
                        }
                    </ul>
                    <div className="nav__language">
                        <LanguageOption to="" text="EN" />
                        <LanguageOption to="" text="ES" />
                    </div>
                </nav>

            </div>
        </>
    )
}
