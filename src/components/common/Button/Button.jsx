import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';
import {colors} from '../../../constants';

const Button = ({backgroundColor, color, isSimple, className, children}) => {
    const buttonStyle = {
        color,
        border: `1px solid ${backgroundColor}`
    };
    buttonStyle.backgroundColor = isSimple ? 'transparent' : backgroundColor;

    return (
        <button className={`${style.main} ${className} btn`} style={buttonStyle}>
            {children}
        </button>
    )
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    isSimple: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    backgroundColor: colors.green,
    color: colors.fontLight,
    isSimple: false
};

export default Button;