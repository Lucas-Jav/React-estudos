import PropTypes from "prop-types"

TextInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    label: PropTypes.string
}

export default function TextInput({id, value, setValue, label}) {
    return (
        <div 
            style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center"
            }}>
            <label htmlFor={id}>{label}:</label>
            <input
                type="text"
                name={id}
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}