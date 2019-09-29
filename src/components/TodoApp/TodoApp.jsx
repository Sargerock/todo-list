import React from 'react';
import TodoHeader from "../TodoHeader/TodoHeader";
import NewTaskPanel from "../NewTaskPanel/NewTaskPanel";
import TasksControlPanel from "../TasksControlPanel/TasksControlPanel";
import TaskList from "../TasksList/TaskList";
import {filters} from "../../constants";

const TodoApp = props => {
    const {
        tasks,
        tasksCount,
        filter,
        createNewTask,
        deleteTask,
        deleteAllTasks,
        deleteAllCompletedTasks,
        setFilter,
        toggleTaskStatus
    } = props;

    return (
        <div className='App'>
            <TodoHeader title='ToDo list'/>
            <NewTaskPanel createNewTask={createNewTask}/>
            <TasksControlPanel tasksCount={tasksCount}
                               currentFilter={filter}
                               filters={filters}
                               deleteAllTasks={deleteAllTasks}
                               deleteAllCompletedTasks={deleteAllCompletedTasks}
                               setFilter={setFilter}
            />
            <TaskList tasks={tasks} filter={filter} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus}/>
        </div>
    )
};

export default TodoApp;