import React from 'react'
import Slider from 'react-slick';
import reviewsData from './../data/reviewsData.json';
import { Card } from './Card';


export const Reviews = ({country}) => {

    /* settings for react-slick */
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
    };

    let reviews

    switch(country) {
        case 'Japan': reviews = reviewsData.Japan
        break;
        case 'Brazil': reviews = reviewsData.Brazil
        break;
        case 'Italy': reviews = reviewsData.Italy
        break;
        case 'France' : reviews = reviewsData.France
        break;
        case 'Peru' : reviews = reviewsData.Peru
        break
    }

    return (
        <>
            <div className={`reviews__container reviews__container__${country}`}>

                <div className='reviews reviews__jp'>

                    <div className='reviews__info'>
                        <h1 className='reviews__info__title'>{country}</h1>
                        <p className='reviews__info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nam nesciunt et harum delectus iste voluptate recusandae autem excepturi deserunt, aut assumenda quae facilis voluptatem nisi omnis quis sapiente iure?</p>
                    </div>

                    <Slider {...settings} className='reviews__cards'>

                        {reviews.map((user, index) => (
                            <Card {...user} key={index} />
                        ))}
                        
                    </Slider>

                </div>

            </div>

        </>
    )


}
