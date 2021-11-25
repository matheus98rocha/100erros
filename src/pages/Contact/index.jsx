import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/index'
import { ImInstagram } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import './styles.css'


function Index() {

    const [toName, setToName] = useState("");
    const [toLastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const clearFields = () => {
        setToName("");
        setLastName("");
        setMessage("");
        toast.success("E-mail enviado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_undr7yl', 'template_nsuw96i', e.target, 'user_RkVzgdvrWHpBhoBzgXg0O')
            .then((result) => {
                console.log(result.text);
                clearFields();
            }, (error) => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    useEffect(() => {
        document.title = "100erross | Contato"
    });
    return (
        <div className="contact">
            <Header />
            <div className="email-content">

                <form
                    onSubmit={sendEmail}
                >

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
                    <input
                        type="text"
                        className="form-field"
                        name="user_name"
                        value={toName}
                        onChange={(e) => setToName(e.target.value)} />

                    <label className="text-lastName">Sobrenome</label>
                    <input
                        type="text"
                        className="form-field"
                        name="lasName"
                        value={toLastName}
                        onChange={(e) => setLastName(e.target.value)}
                        setMessage
                    />

                    <label className="text-email body-text">Mensagem</label>
                    <textarea
                        type="text"
                        className="form-field body-email"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form >
            </div >
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div >
    )
}

export default Index;
