import React from 'react'

export const Hero = ({ country }) => {

    let heroBg = country

    switch (country) {
        case 'Japan': heroBg = 'hero-japan'
            break;
        case 'Brazil': heroBg = 'hero-brazil'
            break;
        case 'France': heroBg = 'hero-france'
            break;
        case 'Italy': heroBg = 'hero-italy'
            break;
        case 'Peru': heroBg = 'hero-peru'
            break;

    }


    return (
        <main className={`hero ${heroBg}`} id="hero">
            <div className="container__info">
                <h1 className="info__h1">VISIT <br /> <span>{country.toUpperCase()}</span></h1>
                <p className="info__p">A land of beauty, history and culture...</p>
            </div>
        </main>
    )
}
