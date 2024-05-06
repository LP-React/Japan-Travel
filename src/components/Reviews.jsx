import React from 'react'
import Slider from 'react-slick';
import reviewsData from './../data/reviewsData.json';
import { Card } from './Card';


export const Reviews = () => {

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

    /* data from reviewsData.json  */
    const reviewsJapan = reviewsData.Japan
    const reviewsItaly = reviewsData.Italy
    const reviewsPeru = reviewsData.Peru
    const reviewsFrance = reviewsData.France
    const reviewsBrazil = reviewsData.Brazil


    return (
        <>
            <div className='reviews__container  '>

                <div className='reviews reviews__jp'>

                    <div className='reviews__info'>
                        <h1 className='reviews__info__title'>Japan</h1>
                        <p className='reviews__info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nam nesciunt et harum delectus iste voluptate recusandae autem excepturi deserunt, aut assumenda quae facilis voluptatem nisi omnis quis sapiente iure?</p>
                    </div>

                    <Slider {...settings} className='reviews__cards'>

                        {reviewsJapan.map((user, index) => (
                            <Card {...user} key={index} />
                        ))}
                        
                    </Slider>

                </div>

            </div>

        </>
    )


}
