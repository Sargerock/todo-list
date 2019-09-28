import React from 'react';
import Task from "./Task/Task";
import PropTypes from 'prop-types';

const TaskList = ({tasks}) => {
    const tasksMap = tasks.map(task => {
       return <Task key={task.id} text={task.text} isDone={task.isDone}/>
    });
    return (
        <div>
            {tasksMap}
        </div>
    )
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;