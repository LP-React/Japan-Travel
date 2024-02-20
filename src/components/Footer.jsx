import React from 'react';

export const Footer = () => {
    return (
        <div className="container__footer">
            <footer className="footer">
                <img src="./src/assets/Icons/Loge.png" alt="" className="logo logo--footer" />
                <div className="footer__links">
                    <ul className="links__ul">
                        <li className="links__li"><a href="#hero" className="links__li__a link">Home</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">Culture</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">Events</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">Reviews</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">Tours</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">Gallery</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">About Us</a></li>
                        <li className="links__li"><a href="" className="links__li__a link">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <div className="contact__options">
                        <img src="./src/assets/Icons/telefono.png" alt="icon_telefono" />
                        <span className="contact__options__text">+51 000 000 000</span>
                    </div>
                    <div className="contact__options">
                        <img src="./src/assets/Icons/whatsapp.png" alt="icon_whatsapp" />
                        <span className="contact__options__text">+51 000 000 000</span>
                    </div>
                    <div className="contact__options">
                        <img src="./src/assets/Icons/instagram.png" alt="icon_instagram" />
                        <span className="contact__options__text">@japan.tourism</span>
                    </div>
                    <div className="contact__options">
                        <img src="./src/assets/Icons/youtube.png" alt="icon_youtube" />
                        <span className="contact__options__text">Japan Tourism</span>
                    </div>
                    <div className="contact__options">
                        <img src="./src/assets/Icons/correo-electronico.png" alt="icon_correo" />
                        <span className="contact__options__text">jp.tourism@gmail.com</span>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <span>Copyright © Japan Travel by <a href="https://github.com/LP-React" target="_blank" className="copyright__github link">- LP-React -</a> . All Rights Reserved.</span>
            </div>
        </div>
    );
};
