import React, {useState} from 'react';
import PropTypes from 'prop-types';

import style from './NewTaskPanel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

//Служит для создания нового задания в списке
const NewTaskPanel = ({createNewTask}) => {
    const [newTaskText, setNewTaskText] = useState("");

    const onTextChange = ({target: {value}}) => {
        if(value.length < 200){
            setNewTaskText(value);
        }
    };
    const onCreateTaskClick = () => {
        if(newTaskText && newTaskText.length > 2){
            createNewTask(newTaskText);
            setNewTaskText("");
        }
    };

    const onKeyDown = (e) => {
      if(e.key === 'Enter') onCreateTaskClick();
    };

    return (
        <div className={style.main}>
            <input type="text"
                   className={style.input}
                   placeholder='New task description...'
                   value={newTaskText}
                   onChange={onTextChange}
                   onKeyDown={onKeyDown}
            />
            <button onClick={onCreateTaskClick} className='todoBtn blue'>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
};

NewTaskPanel.propTypes = {
    createNewTask: PropTypes.func.isRequired
};

export default NewTaskPanel;