import React from "react";
import './button.scss';
import PropTypes from 'prop-types';

const Button = ({
    type,
    fontSize,
    variant,
    textTransform,
    fontFamily,
    btnText,
    className,
    startIcon,
    size,
    endIcon,
    children
}) => {
    const btnProps =
    variant === 'blackBtn' ? 'blackBtn' :
    variant === 'redBtn' ? 'redBtn' :
    variant === 'outlined' ? 'outlined' : 
    variant==='text'? 'textBtn':'defaultBtn'

    return (
        <>
            <button
                    type={type}
                    className={`${btnProps}
                    ${className}
                    ${size}
                    ${fontSize} 
                    ${variant} 
                    ${textTransform} 
                    ${fontFamily}`}>
                {startIcon}{btnText} {children}{endIcon}
            </button>
        </>
    )
}

Button.defaultProps = {
    type:'button',
}
Button.propTypes = {
    type:PropTypes.oneOf(['button','submit']),
    fontSize:PropTypes.string,
    color:PropTypes.string,
    textTransform:PropTypes.string,
    fontFamily:PropTypes.string,
    btnText: PropTypes.string.isRequired,
    linkBtn:PropTypes.string,
    children: PropTypes.node,
}
export default Button;