import "../styles/Card.css";

const Card = (props) => (
    <div className="card">
        <img src={ props.img } alt={ props.alt } loading="lazy" />
        <div className="content">
            <h1>{ props.title }</h1>
            <p>{ props.description }</p>
            <button>Comprar agora</button>
        </div>
    </div>
)

export default Card;