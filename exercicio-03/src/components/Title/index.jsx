import styles from "./styles.module.css"

function Title(props) {
    return (
        <h2 
        className={styles.wrapper}
        >{props.children}</h2>
    )
}

export default Title;