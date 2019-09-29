import React from 'react';
import Task from "./Task/Task";
import PropTypes from 'prop-types';
import {filters} from "../../constants";

const TaskList = ({tasks, filter, deleteTask, toggleTaskStatus}) => {
    const {COMPLETED, UNCOMPLETED} = filters;
    let filteredTasks;

    switch(filter) {
        case COMPLETED:
            filteredTasks = tasks.filter(({isDone}) => isDone);
            break;
        case UNCOMPLETED:
            filteredTasks = tasks.filter(({isDone}) => !isDone);
            break;
        default: filteredTasks = tasks;
    }

    const tasksMap = filteredTasks.map(task => {
       return <Task key={task.id} task={task} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus}/>
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