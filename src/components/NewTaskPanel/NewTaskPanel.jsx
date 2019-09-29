import React, {useState} from 'react';
import Button from "../common/Button/Button";
import {colors} from "../../constants";
import style from './NewTaskPanel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const NewTaskPanel = ({createNewTask}) => {
    const [newTaskText, setNewTaskText] = useState("");

    const onTextChange = ({target: {value}}) => {
        setNewTaskText(value);
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
            <Button onClick={onCreateTaskClick} backgroundColor={colors.blue}>
                <FontAwesomeIcon icon={faPlus}/>
            </Button>
        </div>
    )
};

export default NewTaskPanel;