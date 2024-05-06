import React from 'react'
import galleryData from './../data/galleryData.json'


export const Gallery = ({ country }) => {


    let gallery = ''

    switch (country) {
        case 'Japan': gallery = galleryData.JpGallery
            break;
        case 'Brazil': gallery = galleryData.BrGallery
            break;
        case 'Peru': gallery = galleryData.PeGallery
            break;
        case 'France': gallery = galleryData.FrGallery
            break;
        case 'Italy': gallery = galleryData.ItGallery
            break;
    }


    return (
        <div className='gallery_container'>
            <h1 className='gallery_title'>Gallery</h1>
            {gallery.map(({ img, autor }, index) => (
                <img src={`./assets/gallery/${country}/photos/${img}.jpg`} alt={autor} key={index} className='gallery_image' />
            ))}
        </div>
    )
}
