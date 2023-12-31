import { useDispatch } from "react-redux";
import { createTask } from "../reducers/tasksReducer";

const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskDescription = event.target.taskDescription.value;
    dispatch(createTask(taskDescription));
    event.target.taskDescription.value = "";
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          name="taskDescription"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
