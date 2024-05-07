import React from 'react'

export const SelectCountry = ({ onSelectCountry }) => {

    let counties = [
        { name: 'Italy', src: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg' },
        { name: 'France', src: 'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg' },
        { name: 'Japan', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png' },
        { name: 'Peru', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/255px-Flag_of_Peru.svg.png' },
        { name: 'Brazil', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png' }
    ]

    const selectCountryClick = (country) => {
        onSelectCountry(country)
    }

    return (
        <main className='selectCountryContainer'>
            <h1>Select your country</h1>

            <div className='countryContainer'>

                {
                    counties.map((country, index) => (
                        <div className='countryOption' key={index} onClick={() => selectCountryClick(country.name)}>
                            <img className='countryImage' src={country.src} alt={country.name} />
                            <h2 className='countryText'>{country.name}</h2>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}
