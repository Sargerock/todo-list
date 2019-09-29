import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import TodoAppContainer from "./components/TodoApp/TodoAppContainer";

function App() {
  return (
        <Provider store={store}>
            <TodoAppContainer/>
        </Provider>
  );
}

export default App;
