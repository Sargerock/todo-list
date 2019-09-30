import React from 'react';
import Task from "./Task/Task";
import PropTypes from 'prop-types';

//Создает список компонентов Task с учетом фильтрации
const TaskList = ({tasks, filter, deleteTask, toggleTaskStatus, editTaskText}) => {
    let filteredTasks;

    switch(filter) {
        case 'Completed':
            filteredTasks = tasks.filter(({isDone}) => isDone);
            break;
        case 'Uncompleted':
            filteredTasks = tasks.filter(({isDone}) => !isDone);
            break;
        default: filteredTasks = tasks;
    }

    const tasksMap = filteredTasks.map(task => {
       return <Task key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTaskStatus={toggleTaskStatus}
                    editTaskText={editTaskText}
       />
    });
    return (
        <div>
            {tasksMap}
        </div>
    )
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    filter: PropTypes.string,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskStatus: PropTypes.func.isRequired,
    editTaskText: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
    filter: 'All'
};

export default TaskList;