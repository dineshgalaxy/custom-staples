import PropTypes from 'prop-types';
import Styles from  './input.module.scss';
const Input = ({ inputType, type, rows, placeholder }) => {

    const Inputype = `${inputType}`

    return (
        <Inputype className={`${Styles.input}`} type={type} rows={rows} placeholder={placeholder}></Inputype>
    )
}
Input.propTypes = {
    type: PropTypes.oneOf(['text','password','email','tel','number']).isRequired,
    inputType: PropTypes.string,
    rows: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input;