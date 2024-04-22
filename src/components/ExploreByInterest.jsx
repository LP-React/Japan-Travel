import React from 'react'

export const ExploreByInterest = () => {

    const galleryImages = [
        './src/assets/galley/Rectangle 12-1.png',
        './src/assets/galley/Rectangle 15.png',
        './src/assets/galley/Rectangle 12-3.png',
        './src/assets/galley/Rectangle 12.png',
        './src/assets/galley/Rectangle 13.png',
        './src/assets/galley/Rectangle 14.png'
    ];

    const interestOptions = [
        { href: 'https://www.japan.travel/en/things-to-do/attraction/', text: 'Japan Attractions' },
        { href: 'https://www.japan.travel/en/things-to-do/culture/', text: 'Culture in Japan' },
        { href: 'https://www.japan.travel/en/things-to-do/eat-and-drink/', text: 'Food and Drinks' },
        { href: 'https://www.japan.travel/en/things-to-do/shopping/', text: 'Shopping in Japan' },
        { href: 'https://www.japan.travel/en/things-to-do/action-and-adventure/', text: 'Action and Adventure in Japan' },
        { href: 'https://www.japan.travel/en/things-to-do/festivals-and-events/', text: 'Festival and Events in Japan' },
        { href: 'https://www.japan.travel/national-parks/', text: 'National Parks' },
        { href: 'https://www.japan.travel/en/things-to-do/art-and-design/', text: 'Art and Design in Japan' }
    ];

    const InterestLink = ({ href, text }) => (
        <a href={href} target='_blank' className='exploreInterest__link'>
            <li className='exploreInterest__nav__options__li'>{text}</li>
        </a>
    );


    return (
        <div class='container__exploreInterest'>

            <div class='decoration1 decoration'></div>
            <div class='decoration2 decoration'></div>
            <div class='decoration3 decoration'></div>

            <div class='exploreInterest'>

                <div class='exploreInterest__text'>
                    <h3 class='exploreInterest__tittle'>Explore by Interest</h3>

                    <nav class='exploreInterest__nav'>
                        <ul class='exploreInterest__nav__options'>
                            {interestOptions.map((option, index) => (<InterestLink key={index} {...option} />))}
                        </ul>
                    </nav>
                </div>

                <div class='exploreInterest__gallery'>
                    <div class='background'>
                        <div class='background background__circle'></div>
                        <img src='./src/assets/galley/image 24.png' alt='' class='background__image' />
                    </div>

                    {galleryImages.map((image, index) => (
                        <div className='exploreInterest__gallery__image' key={index}>
                            <img src={image} alt='' />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
