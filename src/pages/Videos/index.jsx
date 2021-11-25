import React from 'react'
import './styles.css';

import Header from '../../components/Header/index'


function index() {
    return (
        <div>
            <Header />
            <div className="video-container">
                <div className="content-video">
                    <iframe
                        src="https://www.youtube.com/embed/DXn5y9IL5r4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        style={
                            {
                                border: '1px solid white',
                                borderRadius: '10px'
                            }
                        }
                    />
                    <p className="title-video">Igu Bantu part. Baezi - CHAVE LOKA (Videoclipe Oficial)</p>
                </div>

                <div className="content-video">
                    <iframe
                        src="https://www.youtube.com/embed/0MDt87H14No"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        style={
                            {
                                border: '1px solid white',
                                borderRadius: '10px'
                            }
                        }
                    />
                    <p className="title-video" >LR91 - Preciosa + Polícia no Helicóptero + Fake News (Videoclipe 3em1)</p>
                </div>
                <div className="content-video">
                    <iframe
                        src="https://www.youtube.com/embed/ZL1EhGzMd10"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        style={
                            {
                                border: '1px solid white',
                                borderRadius: '10px'
                            }
                        }
                    />
                    <p className="title-video">Oi Bota aqui, oi Bota aqui . O Celularzinho</p>
                </div>
            </div>
        </div >
    )
}

export default index
