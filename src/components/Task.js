import { useDispatch } from "react-redux";
import { toggleUrgency } from "../reducers/tasksReducer";
import taskService from "../services/taskService";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleUrgency = async () => {
    await taskService.updateTask(task.id, { ...task, urgent: !task.urgent });
    dispatch(toggleUrgency(task.id));
  };

  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent) " : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleToggleUrgency}
      >
        {task.urgent ? "Make Non-Urgent" : "Make Urgent"}
      </span>
    </div>
  );
};

export default Task;
