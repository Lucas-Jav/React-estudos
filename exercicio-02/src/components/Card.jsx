import "../styles/Card.css";

function Card({ title, img, alt, description }) {
    
    return (
        <div className="card">
            <img src={ img } alt={ alt } loading="lazy" />
            <div className="content">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}


export default Card;