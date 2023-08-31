import styles from "./Card.module.css";
import Button from "./Button";
import Title from "../components/Title/index"
import ProfileSection from "./ProfileSection";
import { useState } from "react";

function Card({ src, alt, name, description, number, email, gitLink, linkedinLink, twtLink }) {
    const [textBtn, setTextBtn] = useState("Follow");

    const handleClick = () => {
        setTextBtn("Following")
        alert("seguindo")
    } 

    return (
        <div className={ styles.Card }>
            <img src={src} alt={alt} loading="lazy"/>
            <Title>
                <span>{name}</span>
                <button 
                onClick={handleClick}
                className={styles.flwBtn}>{textBtn}</button>
            </Title>
            <ProfileSection>{ description }</ProfileSection>
            <ProfileSection>{ number }</ProfileSection>
            <ProfileSection>{ email }</ProfileSection>
            <Button href={ gitLink }>GitHub</Button>
            <Button href={ linkedinLink }>LinkeDin</Button>
            <Button href={ twtLink }>Twitter</Button>
        </div>
    )
}

export default Card;