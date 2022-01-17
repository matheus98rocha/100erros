import React, { useEffect } from 'react'
import Header from '../../components/Header/index';
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom';
import { Session } from '../../data/session/Session';
import Card from '../../components/Card';


import './styles.css'

// import photo1 from '../../assets/images/sessao/B1B2/1.jpg';
// import photo2 from '../../assets/images/sessao/Bronca/1.JPG';
// import photo3 from '../../assets/images/sessao/Editora/1.jpg';
// import photo4 from '../../assets/images/sessao/iza/1.png';
// import photo5 from '../../assets/images/sessao/sol/1.jpg';
// import photo6 from '../../assets/images/sessao/wakanda/1.jpg';

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
