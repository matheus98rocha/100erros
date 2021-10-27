import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { motion } from "framer-motion"

function Index() {

    const [clicked, setClicked] = useState(false);

    const changeIcon = () => {
        setClicked(!clicked);
    }

    return (
        <div className="NavbarItems">

            <motion.button className="menu-icon"
                whileTap={{ scale: 0.9 }}
            >
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={changeIcon} style={{ color: "white" }} />
            </motion.button>

            <div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>Inicio</li>
                    </Link>

                    <Link to="/sobre" style={{ textDecoration: "none" }}>
                        <li>Sobre</li>
                    </Link>

                    <Link to="/analogica" style={{ textDecoration: "none" }}>
                        <li>Analogica</li>
                    </Link>

                    <Link to="/sessao" style={{ textDecoration: "none" }}>
                        <li>Sessão</li>
                    </Link>

                    <Link to="/designer" style={{ textDecoration: "none" }}>
                        <li>Designer</li>
                    </Link>

                    <Link to="/videos" style={{ textDecoration: "none" }}>
                        <li>Videos</li>
                    </Link>

                    <Link to="/contato" style={{ textDecoration: "none" }}>
                        <li style={{ borderRight: "none" }}>Contato</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Index)
