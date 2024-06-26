import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {

    const optionLinks = [
        { href: '/', text: 'Home' },
        /*      
                { href: ', text: 'Culture' },
                { href: ', text: 'Tours' },
                { href: ', text: 'FAQ' },
                { href: ', text: 'Events' },
        */
        { href: '/Reviews', text: 'Reviews' },
        { href: '/Gallery', text: 'Gallery' },
        { href: '/AboutUs', text: 'About Us' },
    ]

    const optionContact = [
        { src: "./assets/Icons/telefono.png", alt: "icon_telefono", text: "+51 000 000 000" },
        { src: "./assets/Icons/whatsapp.png", alt: "icon_whatsapp", text: "+51 000 000 000" },
        { src: "./assets/Icons/instagram.png", alt: "icon_instagram", text: "@global.travel" },
        { src: "./assets/Icons/youtube.png", alt: "icon_youtube", text: "Global-Travel" },
        { src: "./assets/Icons/correo-electronico.png", alt: "icon_correo", text: "global.travel@gmail.com" }
    ]

    const LinksLi = ({ href, text }) => (
        <li className="links__li" >
            <Link to={href} className="links__li__a link">{text}</Link>
        </li>
    )

    const ContactOptions = ({ src, alt, text }) => (
        <div className='contact__options'>
            <img src={src} alt={alt} />
            <span className='contact__options__text'>{text}</span>
        </div>
    )

    return (
        <div className="container__footer">
            <footer className="footer">
                <img src="./assets/Icons/Loge.png" alt="" className="logo logo--footer" />

                <div className="footer__links">
                    <ul className="links__ul">
                        {optionLinks.map((option, index) => (
                            <LinksLi key={index} {...option} />
                        ))}
                    </ul>
                </div>

                <div className="footer__contact">
                    {optionContact.map((option, index) => (
                        <ContactOptions key={index} {...option} />
                    ))}
                </div>

            </footer>

            <div className="copyright">
                <span>Copyright © Global-Travel by <a href="https://github.com/LP-React" target="_blank" className="copyright__github link">- LP-React -</a> . All Rights Reserved.</span>
            </div>
        </div>
    );
};
