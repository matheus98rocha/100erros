import React, { useState } from 'react'
import { SliderData } from '../../data/SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./styles.css"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ImageSlider({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    }

    // setInterval(() => {
    //     setCurrent(current === length - 1 ? 0 : current + 1);
    // }, 4000)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            {
                current === 0 ? <></> : <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            }
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {
                SliderData.map((slide, index) => {

                    return (
                        <>
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {
                                    index === current && (<div>
                                        <LazyLoadImage
                                            src={slide.image}
                                            alt="design-images"
                                            className="image"
                                            effect="blur"
                                        />
                                        <p className="text-image">{slide.name}</p>
                                    </div>)
                                }
                            </div>
                        </>
                    )
                })
            }
        </div >
    )
}

export default ImageSlider
