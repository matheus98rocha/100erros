import React, { useEffect } from 'react'
import Header from '../../components/Header/index';
import { Session } from '../../data/session/Session';
import Card from '../../components/Card';


import './styles.css'

function Index() {

    useEffect(() => {
        document.title = "100erross | Projetos"
    });

    return (
        <div className="session-content">
            <Header />
            <div className="cards-container">
                {
                    Session.map(e => {
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
