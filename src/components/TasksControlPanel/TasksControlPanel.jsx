import React from 'react';
import PropTypes from 'prop-types';
import Button from "../common/Button/Button";
import style from './TaskControlPanel.module.css';
import {colors} from "../../constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faTrash, faList} from '@fortawesome/free-solid-svg-icons';

const TasksControlPanel = ({tasksCount}) => {
    const {green, red, fontDark} = colors;
    const currentFilter = 'All';

    const buttons = ['All', 'Completed', 'Uncompleted'].map(text => {
       return <Button backgroundColor={green} color={fontDark} isSimple={currentFilter!==text}>{text}</Button>
    });

    return (
        <div className={style.main}>
            <span>
                <Button backgroundColor={green} color={fontDark}> <FontAwesomeIcon icon={faList}/> Clear completed</Button>
                <Button backgroundColor={red} className='mlr'><FontAwesomeIcon icon={faTrash}/> Clear all</Button>
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