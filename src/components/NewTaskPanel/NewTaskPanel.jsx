import React, {useState} from 'react';
import style from './NewTaskPanel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

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

    return (
        <div className={style.main}>
            <input type="text"
                   className={style.input}
                   placeholder='New task description...'
                   value={newTaskText}
                   onChange={onTextChange}
            />
            <button onClick={onCreateTaskClick} className='todoBtn blue'>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
};

export default NewTaskPanel;