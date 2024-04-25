import React from 'react'

export const Top10Japan = () => {

    const sectionImages = [
        { src: "./../assets/top10/image 8.png", alt: "Section 1" },
        { src: "./../assets/top10/image 11.png", alt: "Section 2" },
        { src: "./../assets/top10/image 4.png", alt: "Section 3" },
        { src: "./../assets/top10/image 11-1.png", alt: "Section 4" },
        { src: "./../assets/top10/image 12.png", alt: "Section 5" }
    ];

    return (
        <div class="container__topJapan">
            <div class="topJapan">
                <div class="topJapanTittle">
                    <h2 class="tittle">Top 10 On Japan Travel</h2>
                    <div class="tittle__decoration tittle__decoration1"></div>
                    <div class="tittle__decoration tittle__decoration2"></div>
                </div>

                <div class="topJapan__section">
                    <div class="section__decoration"></div>
                    {sectionImages.map((image, index) => (
                        <section className={`section section2`} key={index}>
                            <img className="section__img" src={image.src} alt={image.alt} />
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}
