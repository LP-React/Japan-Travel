import React from 'react'

export const ReadyToGo = ({country}) => {

    let countryBg = country


    switch (country) {
        case 'Japan': countryBg = 'readyToGo-jp'
            break;
        case 'Brazil': countryBg = 'readyToGo-br'
            break;
        case 'France': countryBg = 'readyToGo-fr'
            break;
        case 'Italy': countryBg = 'readyToGo-it'
            break;
        case 'Peru': countryBg = 'readyToGo-pe'
            break;

    }

    return (
        <div className={`readyToGo ${countryBg}`}>
            <span>Ready to go?</span>
        </div>
    )
}
