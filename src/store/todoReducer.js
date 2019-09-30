import {
    filters,
    TODO_CREATE_TASK,
    TODO_DELETE_ALL_COMPLETED_TASK,
    TODO_DELETE_ALL_TASK,
    TODO_DELETE_TASK, TODO_EDIT_TASK,
    TODO_SET_FILTER,
    TODO_TOGGLE_TASK_STATUS
} from "../constants";
import { load } from 'redux-localstorage-simple';

let initState = load({namespace: 'todo-list'});

//инициализация в случае, если в localStorage ничего нет
if(!initState || !initState.tasks || !initState.tasks.length){
    initState = { tasks: [], tasksCount: 0, filter: filters.ALL};
}

export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case TODO_CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task],
                tasksCount: state.tasksCount + 1
            };
        case TODO_DELETE_ALL_TASK:
            return {
              ...state,
              tasks: [],
              tasksCount: 0
            };
        case TODO_DELETE_ALL_COMPLETED_TASK:
            let count = 0;
            return {
              ...state,
                tasks: [...state.tasks.filter(({isDone}) => {
                    if(!isDone){
                        count++;
                    }
                    return !isDone;
                })],
                tasksCount: count
            };
        case TODO_DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(({id}) => id !== action.id)],
                tasksCount: state.tasksCount - 1
            };
        case TODO_SET_FILTER:
            return {
              ...state,
              filter: action.filter
            };
        case TODO_TOGGLE_TASK_STATUS:
            return {
              ...state,
                tasks: [...state.tasks.map(task => {
                    if(task.id === action.id){
                        return {...task, isDone: !task.isDone}
                    }
                    return task;
                })]
            };
        case TODO_EDIT_TASK:
            return {
              ...state,
                tasks: [...state.tasks.map(task => {
                    if(task.id === action.id){
                        return {...task, text: action.text}
                    }
                    return task;
                })]
            };
        default:
            return state;
    }
};

export const createNewTask = text => ({type: TODO_CREATE_TASK, task:{id: new Date().getTime(), text, isDone: false}});
export const deleteTask = id => ({type: TODO_DELETE_TASK, id});
export const deleteAllTasks = () => ({type: TODO_DELETE_ALL_TASK});
export const deleteAllCompletedTasks = () => ({type: TODO_DELETE_ALL_COMPLETED_TASK});
export const setFilter = filter => ({type: TODO_SET_FILTER, filter});
export const toggleTaskStatus = id => ({type: TODO_TOGGLE_TASK_STATUS, id});
export const editTaskText = (id, text) => ({type: TODO_EDIT_TASK, id, text});