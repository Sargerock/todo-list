import React from 'react';
import PropTypes from 'prop-types';
import style from './TaskControlPanel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEraser, faList, faCheckCircle, faCircle} from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '../../utils/useWindowSize';

const TasksControlPanel = ({tasksCount, currentFilter, filters, deleteAllTasks, deleteAllCompletedTasks, setFilter}) => {
    let size = useWindowSize().width;
    const filterIcons = {
        [filters.ALL]: faList,
        [filters.COMPLETED]: faCheckCircle,
        [filters.UNCOMPLETED]: faCircle
    };
    
    const isWidthEnough = () => size > 1100;
    const onDeleteAllClick = () => deleteAllTasks();
    const onDeleteAllCompletedClick = () => deleteAllCompletedTasks();

    const buttons = Object.values(filters).map(text => {
       return <button
           key={text}
           className={currentFilter!==text ? 'todoBtn simple' : 'todoBtn'}
           onClick={()=> setFilter(text)}
           value={text}
       >
           {isWidthEnough() ? text : <FontAwesomeIcon icon={filterIcons[text]}/>}
       </button>
    });

    return (
        <div className={style.main}>
            <span>
                <button onClick={onDeleteAllCompletedClick} className='todoBtn'>
                    <FontAwesomeIcon className='mlr' icon={faEraser}/>
                    {isWidthEnough() ? 'Clear completed' : ''}
                </button>
                <button className='todoBtn red mlr' onClick={onDeleteAllClick}>
                    <FontAwesomeIcon className='mlr' icon={faTrash}/>
                    {isWidthEnough() ? 'Clear all' : ''}
                </button>
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