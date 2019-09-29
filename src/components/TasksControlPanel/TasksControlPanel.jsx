import React from 'react';
import PropTypes from 'prop-types';
import Button from "../common/Button/Button";
import style from './TaskControlPanel.module.css';
import {colors} from "../../constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEraser, faList, faCheckCircle, faCircle} from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '../../utils/useWindowSize';

const TasksControlPanel = ({tasksCount, currentFilter, filters, deleteAllTasks, deleteAllCompletedTasks, setFilter}) => {
    const {green, red, fontDark} = colors;
    let size = useWindowSize().width;
    const filterIcons = {
        [filters.ALL]: faList,
        [filters.COMPLETED]: faCheckCircle,
        [filters.UNCOMPLETED]: faCircle
    };
    
    const isWidthEnought = () => size > 1100;
    const onDeleteAllClick = () => deleteAllTasks();
    const onDeleteAllCompletedClick = () => deleteAllCompletedTasks();
    const onSetFilterClick = ({target: {value}}) => setFilter(value);

    const buttons = Object.values(filters).map(text => {
       return <Button
           key={text}
           backgroundColor={green}
           color={fontDark}
           isSimple={currentFilter!==text}
           onClick={onSetFilterClick}
           value={text}
       >
           {isWidthEnought() ? text : <FontAwesomeIcon icon={filterIcons[text]} />}
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
                    {isWidthEnought() ? 'Clear completed' : ''}
                </Button>
                <Button
                    backgroundColor={red}
                    className='mlr'
                    onClick={onDeleteAllClick}
                >
                    <FontAwesomeIcon className='mlr' icon={faTrash}/>
                    {isWidthEnought() ? 'Clear all' : ''}
                    
                </Button>
                <span>Total: {tasksCount}</span>
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