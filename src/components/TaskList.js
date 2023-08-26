import { useSelector } from "react-redux";
import Task from "./Task";
import FilterTasks from "./FilterTasks";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      <h2>Task List</h2>
      <FilterTasks />
      <hr />
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <hr />
    </div>
  );
};

export default TaskList;
