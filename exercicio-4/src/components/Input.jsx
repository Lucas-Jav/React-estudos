import PropTypes from 'prop-types'

Input.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired
}

export default function Input(props) {

    return (
        <input 
            type={props.type} 
            min={1}
            value={props.value}
            onChange={props.onChange}/>
    )
}