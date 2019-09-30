import {connect} from "react-redux";
import TodoApp from "./TodoApp";
import {
    createNewTask,
    deleteAllCompletedTasks,
    deleteAllTasks,
    deleteTask,
    editTaskText,
    setFilter,
    toggleTaskStatus
} from "../../store/todoReducer";

const mapStateToProps = ({tasks, tasksCount, filter}) => ({
    tasks,
    tasksCount,
    filter
});

const mapDispatchToProps = {
    createNewTask,
    deleteTask,
    deleteAllTasks,
    deleteAllCompletedTasks,
    setFilter,
    toggleTaskStatus,
    editTaskText
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);