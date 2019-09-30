import {applyMiddleware, createStore, compose} from 'redux';
import {todoReducer} from './todoReducer';
import { save } from 'redux-localstorage-simple';

const composeEnhancers =
    process.env.NODE_ENV !== "production" && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
    todoReducer,
    composeEnhancers(applyMiddleware(save({namespace: 'todo-list'})))
);