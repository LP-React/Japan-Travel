import React from 'react'

export const Information = () => {
    return (
        <div class="container__information">
            <div class="information">
                <div class="information__option">
                    <img src="./src/assets/Icons/visa.png" alt="visa"/>
                        <h3 class="information__option__tittle">Visa Information</h3>
                        <a href="https://www.japan.travel/en/plan/embassies/" class="information__option__link link"
                            target="_blank">Embassies</a>
                        <a href="https://www.japan.travel/en/plan/getting-to-japan/" class="information__option__link link"
                            target="_blank">Getting to Japan</a>
                </div>
                <div class="information__option">
                    <img src="./src/assets/Icons/cama.png" alt="hotel"/>
                        <h3 class="information__option__tittle">Where to Stay</h3>
                        <a href="https://www.japan.travel/en/online-reservation-sites/" class="information__option__link link"
                            target="_blank">Hotels</a>
                        <a href="https://www.japanican.com/?cid=1839029&ds=bvWAOYiP%2FS3KBu8L"
                            class="information__option__link link" target="_blank">Reservation</a>
                </div>
                <div class="information__option">
                    <img src="./src/assets/Icons/avion.png" alt="airplane"/>
                        <h3 class="information__option__tittle">Airport Access</h3>
                        <a href="https://www.japan.travel/en/plan/airport-access/haneda-airport/"
                            class="information__option__link link" target="_blank">Haneda Airport</a>
                        <a href="https://www.japan.travel/en/plan/airport-access/narita-airport/"
                            class="information__option__link link" target="_blank">Narita Airport</a>
                </div>
                <div class="information__option">
                    <img src="./src/assets/Icons/huellas.png" alt="pasos"/>
                        <h3 class="information__option__tittle">Getting Around</h3>
                        <a href="https://www.japan.travel/en/plan/getting-around/shinkansen/"
                            class="information__option__link link" target="_blank">Shinkansen</a>
                        <a href="https://www.japan.travel/en/plan/getting-around/taxis/" class="information__option__link link"
                            target="_blank">Taxis</a>
                </div>
                <div class="information__option">
                    <img src="./src/assets/Icons/map.png" alt="map"/>
                        <h3 class="information__option__tittle">Get Bochure</h3>
                        <a href="https://visitgifu.com/see-do/activities-tours/" class="information__option__link link"
                            target="_blank">Tours</a>
                        <a href="https://jjactivity.com/?lang=en" class="information__option__link link"
                            target="_blank">Activities</a>
                </div>
            </div>
        </div>
    )
}
