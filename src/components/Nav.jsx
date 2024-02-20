import React from 'react'

export const Nav = () => {
    return (
        <>
            <div class="container__nav">
                <nav class="nav">
                    <div class="nav__logo" data-aos="fade-down">
                        <a class="link" href="#hero">
                            <img src="./src/assets/Icons/Loge.png" alt="japan_tourism" class="logo"/>
                                <span class="nav__logo__span">日本観光</span></a>
                    </div>
                    <ul class="nav__links__ul" data-aos="fade-down">
                        <li class="nav__links__ul__li"><a href="#hero" class="link">Home</a></li>
                        <li class="nav__links__ul__li"><a href="https://alljapantours.com" class="link"
                            target="_blank">Tours</a></li>
                        <li class="nav__links__ul__li"><a href="https://www.galleryjapan.com/locale/ja_JP/" class="link"
                            target="_blank">Gallery</a></li>
                        <li class="nav__links__ul__li"><a href="./src/pages/toDo.html" class="link">Reviews</a></li>
                        <li class="nav__links__ul__li"><a href="./src/pages/toDo.html" class="link">About Us</a></li>
                        <li class="nav__links__ul__li"><a href="./src/pages/toDo.html" class="link">Contact</a></li>
                    </ul>
                    <div class="nav__language" data-aos="fade-down">
                        <a href="index.html" class="link nav__language__option">EN</a>
                        <a href="pages/indexES.html" class="link nav__language__option">ES</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
