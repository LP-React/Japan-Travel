import React from 'react'

export const Nav = () => {

    const Logo = () => {
        return (
            <div class="nav__logo">
                <a class="link" href="#hero">
                    <img src="./../src/assets/Icons/Loge.png" alt="japan_tourism" class="logo" />
                    <span class="nav__logo__span">日本観光</span>
                </a>
            </div>
        )
    };

    const NavLink = ({ href, text }) => {
        return (
            <li class="nav__links__ul__li">
                <a href={href} class="link">{text}</a>
            </li>
        )
    }

    const navLinks = [
        { href: '#hero', text: 'Home' },
        { href: '', text: 'Gallery' },
        { href: '', text: 'Reviews' },
        { href: '', text: 'About Us' },
        { href: '', text: 'Contact' },
    ]

    const LanguageOption = ({ href, text }) => {
        return (
            <a href={href} className="link nav__language__option">{text}</a>
        )
    };



    return (
        <>
            <div class="container__nav">
                <nav class="nav">
                    <Logo />
                    <ul class="nav__links__ul">
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <NavLink href={link.href} key={index} text={link.text}/>
                                )
                            })
                        }
                    </ul>
                    <div class="nav__language">
                        <LanguageOption href="" text="EN" />
                        <LanguageOption href="" text="ES" />
                    </div>
                </nav>
            </div>
        </>
    )
}
