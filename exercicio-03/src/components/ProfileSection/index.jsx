import styles from "./style.module.css";

function ProfileSection(props) {
    return (
        <>
            <p className={styles.wrapper}>
                {props.children}
            </p>
        </>
    )
}

export default ProfileSection;