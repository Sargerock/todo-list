import React from 'react';
import PropTypes from 'prop-types';
import Button from "../common/Button/Button";
import style from './TaskControlPanel.module.css';
import {colors} from "../../constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEraser} from '@fortawesome/free-solid-svg-icons';

const TasksControlPanel = ({tasksCount, currentFilter, filters, deleteAllTasks, deleteAllCompletedTasks, setFilter}) => {
    const {green, red, fontDark} = colors;

    const onDeleteAllClick = () => deleteAllTasks();
    const onDeleteAllCompletedClick = () => deleteAllCompletedTasks();
    const onSetFilterClick = ({target: {innerHTML}}) => setFilter(innerHTML);

    const buttons = Object.values(filters).map(text => {
       return <Button
           key={text}
           backgroundColor={green}
           color={fontDark}
           isSimple={currentFilter!==text}
           onClick={onSetFilterClick}
           value={text}
       >
           {text}
       </Button>
    });

    return (
        <div className={style.main}>
            <span>
                <Button
                    backgroundColor={green}
                    color={fontDark}
                    onClick={onDeleteAllCompletedClick}
                >
                    <FontAwesomeIcon className='mlr' icon={faEraser}/>
                    Clear completed
                </Button>
                <Button
                    backgroundColor={red}
                    className='mlr'
                    onClick={onDeleteAllClick}
                >
                    <FontAwesomeIcon className='mlr' icon={faTrash}/>
                    Clear all
                </Button>
                <span>Total tasks: {tasksCount}</span>
            </span>
            <span>
                {buttons}
            </span>
        </div>
    )
};

TasksControlPanel.propTypes = {
    tasksCount: PropTypes.number
};

TasksControlPanel.defaultProps = {
    tasksCount: 0
};

export default TasksControlPanel;