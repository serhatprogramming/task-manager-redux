import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useEffect } from "react";
import taskService from "./services/taskService";
import { initializeTasks } from "./reducers/tasksReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    taskService.getTasks().then((tasks) => dispatch(initializeTasks(tasks)));
  }, []);
  return (
    <div>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;
