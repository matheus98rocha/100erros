import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/index'
import "./styles.css"
import { AutomaticSliderData } from '../../data/AutomaticSliderData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Home() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        document.title = " 100erross | giulio cesare "
    });

    useEffect(() => {
        setTimeout(
            () =>
                setCurrent((prevIndex) =>
                    prevIndex === AutomaticSliderData.length - 1 ? 0 : prevIndex + 1
                ),
            5500);
    }, [current])




    return (
        <div className="home">
            <Header />
            <h1>Giulio Cesare</h1>

            <div>
                {
                    AutomaticSliderData.map((photo, index) => {
                        return (
                            index === current &&
                            <div key={index}>
                                <LazyLoadImage src={photo.image} alt='home' effect='blur' className='photo' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home

