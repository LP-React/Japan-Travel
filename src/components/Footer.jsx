import React from 'react';

export const Footer = () => {

    const optionLinks = [
        { href: "#hero", text: "Home" },
        { href: "", text: "Culture" },
        { href: "", text: "Events" },
        { href: "", text: "Reviews" },
        { href: "", text: "Tours" },
        { href: "", text: "Gallery" },
        { href: "", text: "About Us" },
        { href: "", text: "FAQ" },
    ]

    const optionContact = [
        { src: "./assets/Icons/telefono.png", alt: "icon_telefono", text: "+51 000 000 000" },
        { src: "./assets/Icons/whatsapp.png", alt: "icon_whatsapp", text: "+51 000 000 000" },
        { src: "./assets/Icons/instagram.png", alt: "icon_instagram", text: "@global.tourism" },
        { src: "./assets/Icons/youtube.png", alt: "icon_youtube", text: "Global Tourism" },
        { src: "./assets/Icons/correo-electronico.png", alt: "icon_correo", text: "global.tourism@gmail.com" }
    ]

    const LinksLi = ({ href, text }) => (
        <li className="links__li" >
            <a href={href} className="links__li__a link">{text}</a>
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
                <span>Copyright © Global Travel by <a href="https://github.com/LP-React" target="_blank" className="copyright__github link">- LP-React -</a> . All Rights Reserved.</span>
            </div>
        </div>
    );
};
