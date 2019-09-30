import React, {useState, useEffect} from 'react';
import {colors} from '../../../constants';
import PropTypes from 'prop-types';
import style from './Task.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faEdit, faUndoAlt, faSave} from '@fortawesome/free-solid-svg-icons';

//Рендерит задачу, переходит в режим редактирования в зависимости от локального состояния
const Task = ({task: {id, text, isDone}, deleteTask, toggleTaskStatus, editTaskText}) => {
    const [inputText, setInputText] = useState(text);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setInputText(text);
    }, [text]);

    const {lightGreen, lightRed} = colors;
    const inlineStyle = {
        backgroundColor: isDone ? lightGreen : lightRed,
        textDecoration: isDone ? 'line-through' : 'none'
    };

    const onDeleteClick = () => { deleteTask(id); };
    const onEditClick = () => { setEditMode(true); };
    const onCancelClick = () => {
        setInputText(text);
        setEditMode(false);
    };
    const onToggleStatusClick = () => { toggleTaskStatus(id) };
    const onInputChange = ({target: {value}}) => {
        if(value.length > 2 && value.length < 200){
            setInputText(value);
        }
    };
    const onSaveEditClick = () => {
        editTaskText(id, inputText);
        setEditMode(false);
    };


    return (
        <div className={style.main}>
            {editMode ?
                <input type="text" value={inputText} onChange={onInputChange} className={style.text}/> :
                <span style={inlineStyle} className={style.text} onClick={onToggleStatusClick}>{text}</span>
            }
            <span className={style.minContent}>
                <button className='todoBtn small lightRed' onClick={editMode ? onCancelClick : onDeleteClick}>
                    <FontAwesomeIcon icon={editMode ? faUndoAlt : faTimes}/>
                </button>
                <button className='todoBtn small' onClick={editMode ? onSaveEditClick : onEditClick}>
                    <FontAwesomeIcon icon={editMode ? faSave : faEdit}/>
                </button>
            </span>
        </div>
    )
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskStatus: PropTypes.func.isRequired,
    editTaskText: PropTypes.func.isRequired
};

export default Task;