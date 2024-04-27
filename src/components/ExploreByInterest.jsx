import React from 'react'

export const ExploreByInterest = () => {

    const galleryImages = [
        'Rectangle 12-1.png',
        'Rectangle 15.png',
        'Rectangle 12-3.png',
        'Rectangle 12.png',
        'Rectangle 13.png',
        'Rectangle 14.png'
    ];

    const interestOptions = [
        { href: '', text: 'Japan Attractions' },
        { href: '', text: 'Culture in Japan' },
        { href: '', text: 'Food and Drinks' },
        { href: '', text: 'Shopping in Japan' },
        { href: '', text: 'Action and Adventure in Japan' },
        { href: '', text: 'Festival and Events in Japan' },
        { href: '', text: 'National Parks' },
        { href: '', text: 'Art and Design in Japan' }
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
                        <img src='./assets/gallery/image 24.png' alt='' class='background__image' />
                    </div>

                    {galleryImages.map((image, index) => (
                        <div className='exploreInterest__gallery__image' key={index}>
                            <img src={`./assets/gallery/${image}`} alt='' />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
