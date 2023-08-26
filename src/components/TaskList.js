import Task from "./Task";
import FilterTasks from "./FilterTasks";

const TaskList = () => {
  const tasks = [
    { id: 1, description: "Finish the report", urgent: true },
    { id: 2, description: "Buy groceries", urgent: false },
    { id: 3, description: "Call John", urgent: false },
    { id: 4, description: "Prepare presentation", urgent: true },
  ];

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
