import React from 'react';
import './App.css';
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TasksControlPanel from "./components/TasksControlPanel/TasksControlPanel";
import NewTaskPanel from "./components/NewTaskPanel/NewTaskPanel";
import TaskList from "./components/TasksList/TaskList";

function App() {
    const tasks = [
        {id: 1, text: 'Learn React', isDone: true },
        {id: 2, text: 'Complete Todo list', isDone: false },
        {id: 3, text: 'Work with joy', isDone: true },
        {id: 4, text: 'Go to bed', isDone: false }
    ];
  return (
    <div className="App">
            <TodoHeader title='ToDo list'/>
            <NewTaskPanel/>
            <TasksControlPanel/>
            <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
