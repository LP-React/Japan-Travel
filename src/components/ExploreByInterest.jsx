import React, { useState } from 'react'

export const ExploreByInterest = ({ country }) => {

    

    const [galleryImages, setGalleryImages] = useState(['1-1', '1-2', '1-3', '1-4', '1-5', '1-6'])

    const attractionsImg = () => {
        setGalleryImages(['1-1', '1-2', '1-3', '1-4', '1-5', '1-6'])
    }

    const cultureImg = () => {
        setGalleryImages(['2-1', '2-2', '2-3', '2-4', '2-5', '2-6'])
    }

    const foodAndDrinksImg = () => {
        setGalleryImages(['3-1', '3-2', '3-3', '3-4', '3-5', '3-6'])
    }

    const shoppingImg = () => {
        setGalleryImages(['4-1', '4-2', '4-3', '4-4', '4-5', '4-6'])
    }

    const actionAndAdventureImg = () => {
        setGalleryImages(['5-1', '5-2', '5-3', '5-4', '5-5', '5-6']);
    };

    const festivalAndEventsImg = () => {
        setGalleryImages(['6-1', '6-2', '6-3', '6-4', '6-5', '6-6']);
    };

    const nationalParksImg = () => {
        setGalleryImages(['7-1', '7-2', '7-3', '7-4', '7-5', '7-6']);
    };

    const artAndDesignImg = () => {
        setGalleryImages(['8-1', '8-2', '8-3', '8-4', '8-5', '8-6']);
    };

    const interestOptions = [
        { onClick: attractionsImg, text: `${country} Attractions` },
        { onClick: cultureImg, text: `Culture in ${country}` },
        { onClick: foodAndDrinksImg, text: `Food and Drinks` },
        { onClick: shoppingImg, text: `Shopping in ${country}` },
        { onClick: actionAndAdventureImg, text: `Action and Adventure in ${country}` },
        { onClick: festivalAndEventsImg, text: `Festival and Events in ${country}` },
        { onClick: nationalParksImg, text: `National Parks` },
        { onClick: artAndDesignImg, text: `Art and Design in ${country}` }
    ];

    const InterestLink = ({ onClick, text }) => (
        <li onClick={onClick} className='exploreInterest__nav__options__li'>{text}</li>
    );


    return (
        <div className='container__exploreInterest'>

            <div className='decoration decoration1'></div>
            <div className='decoration decoration2'></div>
            <div className='decoration decoration3'></div>

            <div className='exploreInterest'>

                <div className='exploreInterest__text'>
                    <h3 className='exploreInterest__tittle'>Explore by Interest</h3>
                    <nav className='exploreInterest__nav'>
                        <ul className='exploreInterest__nav__options'>
                            {interestOptions.map((option, index) => (<InterestLink key={index} {...option} />))}
                        </ul>
                    </nav>
                </div>

                <div className='exploreInterest__gallery'>
                    <div className='background'>
                        <div className='background background__circle'></div>
                        <img src={`./assets/gallery/${country}/interest/country.png`} alt='' className='background__image' />
                    </div>

                    {galleryImages.map((image, index) => (
                        <div className='exploreInterest__gallery__image' key={index}>
                            <img src={`./assets/gallery/${country}/interest/${image}.jpg`} alt='' />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
