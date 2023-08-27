import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useEffect } from "react";
import { fetchInitTasks } from "./reducers/tasksReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;
