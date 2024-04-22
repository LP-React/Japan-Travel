import React from 'react'

export const BookYourTrip = () => {
    return (
        <div className='container__bookTrip'>
            <div className='bookTrip'>
                <div className='bookTrip__form'>
                    <h3 className='bookTrip__form__tittle'>Book Your <br /> Trip To Japan!</h3>

                    <form action='' className='bookTrip__form__form' id='formClient'>
                        <div className='form__item form__input__name'>
                            <input type='text' placeholder='Name and Lastname' />
                        </div>
                        <div className='form__item form__input__email'>
                            <input type='email' placeholder='E-Mail' />
                        </div>
                        <div className='form__item form__input__phone'>
                            <input type='tel' placeholder='Phone Number' />
                        </div>
                        <div className='form__country__options form__item'>
                            <select name='Country' id='country'>
                                <option value='Select Country'>Select Country</option>
                                <option value='Perú'>Perú</option>
                                <option value='Argentina'>Argentina</option>
                                <option value='Brazil'>Brazil</option>
                                <option value='Colombia'>Colombia</option>
                                <option value='Ecuador'>Ecuador</option>
                            </select>
                        </div>
                        <button className='form__item form__button' type='submit' form='formClient' value='submit'>
                            Book Now!
                        </button>
                    </form>
                </div>

                <div className='bookTrip__img'>
                    <img src='./src/assets/img/nook.jpg' alt='' />
                </div>
            </div>
        </div>
    );
};


