import React from "react"

export const Card = ({ photo, nameUser, review }, index) => {
    return (
        <div className='info__cards' key={index}>
            <img className='info__cards__img' src={`./assets/gallery/users/${photo}.jpg`} alt={nameUser} />
            <p className='info__cards__review'>"{review}"</p>
            <h2 className='info__cards__name'>{nameUser}</h2>
        </div>
    )
}