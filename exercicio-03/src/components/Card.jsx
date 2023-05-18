import styles from "./Card.module.css"
import Button from "./Button";

function Card({ src, alt, name, description, number, email, gitLink, linkedinLink, twtLink }) {
    return (
        <div className={ styles.Card }>
            <img src={src} alt={alt} loading="lazy"/>
            <h2>{ name }</h2>
            <p>{ description }</p>
            <p>{ number }</p>
            <p>{ email }</p>
            <Button href={ gitLink } title="GitHub"></Button>
            <Button href={ linkedinLink } title="LinkeDin"></Button>
            <Button href={ twtLink } title="Twitter"></Button>
        </div>
    )
}

export default Card;