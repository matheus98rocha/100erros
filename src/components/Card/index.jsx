import './card.css'
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className='card-container'>
            <Link to={props.destiny}
                style={{
                    textDecoration: "None",
                    color: "black",
                }}
            >
                <div className="image-container">
                    <img src={props.imageUrl} alt="card-view" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3
                            style={{
                                textAlign: "center"
                            }}
                        >{props.title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{props.body}</p>
                    </div>
                    <div className="btn">
                        <button>
                            Ver Fotos
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
