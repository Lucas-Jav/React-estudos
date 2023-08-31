function Button({ href, children }) {
    return (
        <a 
        href={ href } 
        target="_blank">
            { children }
        </a>
    )
}

export default Button;