import React from 'react';
import Button from "../../common/Button/Button";
import {colors} from "../../../constants";
import PropTypes from 'prop-types';
import style from './Task.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Task = ({task: {id, text, isDone}, deleteTask, toggleTaskStatus}) => {
    const {lightGreen, lightRed} = colors;
    const inlineStyle = {
        backgroundColor: isDone ? lightGreen : lightRed,
        textDecoration: isDone ? 'line-through' : 'none'
    };

    const onDeleteClick = () => { deleteTask(id); };
    const onToggleStatusClick = () => { toggleTaskStatus(id) };

    return (
        <div className={style.main}>
            <span style={inlineStyle} className={style.text} onClick={onToggleStatusClick}>{text}</span>
            <Button backgroundColor={colors.red} onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
        </div>
    )
};

Task.propTypes = {
    task: PropTypes.object,
    isDone: PropTypes.bool
};

Task.defaultProps = {
    isDone: false
};

export default Task;