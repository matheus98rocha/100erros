import React from 'react'
import './styles.css';

import Header from '../../components/Header/index'
import { VideosData } from '../../data/videosData';



function index() {
    return (
        <div>
            <Header />
            <div className="video-container">
                {
                    VideosData.map(video => {
                        return (
                            <div className="content-video">
                                <iframe
                                    src={video.videoUrl}
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
                                <p className="title-video">{video.nameVideo}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default index
