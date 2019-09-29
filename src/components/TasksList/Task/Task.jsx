import React from 'react';
import {colors} from "../../../constants";
import PropTypes from 'prop-types';
import style from './Task.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faEdit} from "@fortawesome/free-solid-svg-icons";

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
            <span className={style.minContent}>
                <button className='todoBtn small lightRed' onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
                <button className='todoBtn small' onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
            </span>
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