import React from 'react'

export const Information = () => {

    const options = [
        {
            icon: "./assets/Icons/visa.png",
            title: "Visa Information",
            links: [
                { url: "https://www.japan.travel/en/plan/embassies/", text: "Embassies" },
                { url: "https://www.japan.travel/en/plan/getting-to-japan/", text: "Getting to Japan" }
            ]
        },
        {
            icon: "./assets/Icons/cama.png",
            title: "Where to Stay",
            links: [
                { url: "https://www.japan.travel/en/online-reservation-sites/", text: "Hotels" },
                { url: "https://www.japanican.com/?cid=1839029&ds=bvWAOYiP%2FS3KBu8L", text: "Reservation" }
            ]
        },
        {
            icon: "./assets/Icons/avion.png",
            title: "Airport Access",
            links: [
                { url: "https://www.japan.travel/en/plan/airport-access/haneda-airport/", text: "Haneda Airport" },
                { url: "https://www.japan.travel/en/plan/airport-access/narita-airport/", text: "Narita Airport" }
            ]
        },
        {
            icon: "./assets/Icons/huellas.png",
            title: "Getting Around",
            links: [
                { url: "https://www.japan.travel/en/plan/getting-around/shinkansen/", text: "Shinkansen" },
                { url: "https://www.japan.travel/en/plan/getting-around/taxis/", text: "Taxis" }
            ]
        },
        {
            icon: "./assets/Icons/map.png",
            title: "Get Bochure",
            links: [
                { url: "https://visitgifu.com/see-do/activities-tours/", text: "Tours" },
                { url: "https://jjactivity.com/?lang=en", text: "Activities" }
            ]
        },

    ];

    const InformationOption = ({ icon, title, links }) => {
        return (
            <div className="information__option">
                <img src={icon} alt={title} />
                <h3 className="information__option__title">{title}</h3>
                {links.map((link, index) => (
                    <a key={index} href={link.url} className="information__option__link link" target="_blank">{link.text}</a>
                ))}
            </div>
        )
    };

    return (
        <div className="container__information">
            <div className="information">
                {options.map((option, index) => (
                    <InformationOption key={index} {...option} />
                ))}
            </div>
        </div>
    )
}
