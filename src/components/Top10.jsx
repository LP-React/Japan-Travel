import React from 'react'
import Slider from "react-slick";
import informationTop10 from './../data/informationTop10.json'

export const Top10 = ({ country }) => {

    /* react-slick settings */
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
    };

    let bgTop10;
    let sectionTop;

    switch (country) {
        case 'Japan': bgTop10 = 'container__top-jp'
            sectionTop = informationTop10.JapanTop10;
            break;
        case 'Brazil': bgTop10 = 'container__top-br'
            sectionTop = informationTop10.BrazilTop10;;
            break;
        case 'France': bgTop10 = 'container__top-fr';
            sectionTop = informationTop10.FranceTop10;
            break;
        case 'Italy': bgTop10 = 'container__top-it';
            sectionTop = informationTop10.ItalyTop10;
            break;
        case 'Peru': bgTop10 = 'container__top-pe';
            sectionTop = informationTop10.PeruTop10;
            break;
    }

    const Card = ({ img }, index) => {
        return (
            <section key={index}>
                <img className="section__img" src={`./../assets/gallery/${country}/top10/${img}.jpg`} alt={img} />
            </section>
        )
    }

    return (
        <div className={`container__top ${bgTop10}`}>
            <div className="topJapan">

                <div className="topJapanTittle">
                    <h2 className="tittle">Top 10 On {country} Travel</h2>
                    <div className="tittle__decoration tittle__decoration1"></div>
                    <div className="tittle__decoration tittle__decoration2"></div>
                </div>

                <div className="topJapan__section">
                    <Slider {...settings} className='top10-slider'>
                        {sectionTop.map((image, index) => (
                            <Card key={index} {...image} />
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    )
}
