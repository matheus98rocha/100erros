import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import './styles.css'
import Card from '../../components/Card';
import { Analogica } from '../../data/Analogicas/Analogica';

function Index() {

    useEffect(() => {
        document.title = "100erross | Analogica"
    })

    return (
        <div className="analogic-content">
            <Header />
            <div className="cards-container">            
            {
                Analogica.map(e => {
                    return (
                        <Card
                            title={e.title}
                            imageUrl={e.imageUrl}
                            body={e.body}
                            destiny={e.destiny}
                            className="card"
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Index
