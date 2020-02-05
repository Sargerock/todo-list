import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEraser, faList, faCheckCircle, faCircle} from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '../../utils/useWindowSize';

//Содежит элементы управления списком, такие как: фильры, очистка списка от всех/готовых заданий
const TasksControlPanel = ({currentFilter, filters, deleteAllTasks, deleteAllCompletedTasks, setFilter}) => {
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
        <div className='flexSpaceBetween'>
            <span>
                <button onClick={onDeleteAllCompletedClick} className='todoBtn'>
                    <FontAwesomeIcon className='mlr' icon={faEraser}/>
                    {isWidthEnough() ? 'Clear completed' : ''}
                </button>
                <button className='todoBtn red mlr' onClick={onDeleteAllClick}>
                    <FontAwesomeIcon className='mlr' icon={faTrash}/>
                    {isWidthEnough() ? 'Clear all' : ''}
                </button>
            </span>
            <span>
                {buttons}
            </span>
        </div>
    )
};

TasksControlPanel.propTypes = {
    currentFilter: PropTypes.string,
    filters: PropTypes.objectOf(PropTypes.string).isRequired,
    deleteAllTasks: PropTypes.func.isRequired,
    deleteAllCompletedTasks: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired
};

TasksControlPanel.defaultProps = {
    currentFilter: 'All'
};

export default TasksControlPanel;