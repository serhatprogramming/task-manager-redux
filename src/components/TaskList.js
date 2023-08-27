import { useSelector } from "react-redux";
import Task from "./Task";
import FilterTasks from "./FilterTasks";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter(
          (task) =>
            (filter === "urgent" && task.urgent) ||
            (filter === "non-urgent" && !task.urgent)
        );

  return (
    <div>
      <h2>Task List</h2>
      <FilterTasks />
      <hr />
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <hr />
    </div>
  );
};

export default TaskList;
