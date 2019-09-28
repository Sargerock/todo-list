import React from 'react';
import Button from "../common/Button/Button";
import {colors} from "../../constants";
import style from './NewTaskPanel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const NewTaskPanel = () => {
    return (
        <div className={style.main}>
            <input type="text" className={style.input} placeholder='New task description...'/>
            <Button backgroundColor={colors.blue}>
                <FontAwesomeIcon icon={faPlus}/>
            </Button>
        </div>
    )
};

export default NewTaskPanel;