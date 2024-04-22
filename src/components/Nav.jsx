import React from 'react'

export const Nav = () => {

    const Logo = () => {
        return (
            <div class="nav__logo">
                <a class="link" href="#hero">
                    <img src="./src/assets/Icons/Loge.png" alt="japan_tourism" class="logo" />
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
                        <NavLink href="#hero" text="Home" />
                        <NavLink href="https://alljapantours.com" text="Tours" />
                        <NavLink href="https://www.galleryjapan.com/locale/ja_JP/" text="Gallery" />
                        <NavLink href="./src/pages/toDo.html" text="Reviews" />
                        <NavLink href="./src/pages/toDo.html" text="About Us" />
                        <NavLink href="./src/pages/toDo.html" text="Contact" />
                    </ul>
                    <div class="nav__language">
                        <LanguageOption href="index.html" text="EN" />
                        <LanguageOption href="pages/indexES.html" text="ES" />
                    </div>
                </nav>
            </div>
        </>
    )
}
