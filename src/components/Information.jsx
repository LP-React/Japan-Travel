import React from 'react'
import informationTravel from './../data/informationTravel.json'

export const Information = ({ country }) => {

    const optionsIconsTitle = [
        { icon: './assets/Icons/visa.png', title: 'Visa Information' },
        { icon: './assets/Icons/bed.png', title: 'Where to Stay' },
        { icon: './assets/Icons/airplane.png', title: 'Airport Access' },
        { icon: './assets/Icons/steps.png', title: 'Getting Around' },
        { icon: './assets/Icons/map.png', title: 'Get Bochure' },
    ]

    let optionsLinks = []

    switch (country) {
        case 'Japan': optionsLinks = informationTravel.Japan;
            break;
        case 'Brazil': optionsLinks = informationTravel.Brazil;
            break;
        case 'Peru': optionsLinks = informationTravel.Peru;
            break;
        case 'Italy': optionsLinks = informationTravel.Italy;
            break;
        case 'France': optionsLinks = informationTravel.France;
            break;
    }

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

                {optionsLinks.map((option, index) => (
                    <InformationOption
                        key={index}
                        icon={optionsIconsTitle[index].icon}
                        title={optionsIconsTitle[index].title}
                        {...option}
                    />
                ))}

            </div>

        </div>
    )
}
