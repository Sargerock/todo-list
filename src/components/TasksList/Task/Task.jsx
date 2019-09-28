import React from 'react';
import Button from "../../common/Button/Button";
import {colors} from "../../../constants";
import PropTypes from 'prop-types';
import style from './Task.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Task = ({text, isDone}) => {
    const {lightGreen, lightRed} = colors;
    const inlineStyle = {
        backgroundColor: isDone ? lightGreen : lightRed,
        textDecoration: isDone ? 'line-through' : 'none'
    };
    return (
        <div className={style.main}>
            <span style={inlineStyle} className={style.text}>{text}</span>
            <Button backgroundColor={colors.red}>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
        </div>
    )
};

Task.propTypes = {
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool
};

Task.defaultProps = {
    isDone: false
};

export default Task;