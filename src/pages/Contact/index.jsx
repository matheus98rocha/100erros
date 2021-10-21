import React, { useEffect } from 'react'
import Header from '../../components/Header/index'
import { ImInstagram } from 'react-icons/im';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './styles.css'

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_undr7yl', 'template_nsuw96i', e.target, 'user_RkVzgdvrWHpBhoBzgXg0O')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}


function Index() {

    useEffect(() => {
        document.title = "100erross | Contato"
    });
    return (
        <div className="contact">
            <Header />
            <div className="email-content">

                <form onSubmit={sendEmail}>

                    <div className="header-email">
                        <p>Me encontre nas redes sociais ou me envie uma mensagem:</p>
                        <Link
                            to={{ pathname: "https://www.instagram.com/100erross/" }}
                            style={{ color: "black" }}
                            target="_blank"
                        >
                            <ImInstagram className="instagram-icon" />
                        </Link>

                    </div>

                    <label className="text-name">Nome</label>
                    <input type="text" className="form-field" name="user_name" />

                    <label className="text-lastName">Sobrenome</label>
                    <input type="text" className="form-field" name="lasName" />

                    <label className="text-email body-text">Mensagem</label>
                    <textarea type="text" className="form-field body-email" name="message" />
                    <button type="submit">Enviar</button>
                </form >
            </div >
        </div >
    )
}

export default Index;
