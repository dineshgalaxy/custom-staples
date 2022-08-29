import "./links.scss";
import PropTypes from 'prop-types';

const Links = (
    { fontSize,
        color,
        textTransform,
        fontFamily,
        fontWeight,
        href,
        target,
        textDecoration,
        linkText,
        children }

) => {
    const textDecorat = textDecoration ? 'textDecorationLine' :'textDecoration';
    return (
        <>
            <a
                href={href}
                target={target}
                rel="noreferrer"
                className={`${textDecorat} ${textTransform} 
                ${color}  ${fontWeight} ${fontFamily} 
                ${fontSize}`}>
                {linkText}{children}
            </a>
        </>
    )
}


Links.defaultProps = {
    textDecoration:true,
}

Links.propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.string,
    textTransform: PropTypes.string,
    fontFamily: PropTypes.string,
    href: PropTypes.string,
    linkText: PropTypes.string,
    children: PropTypes.node,
}

export default Links;