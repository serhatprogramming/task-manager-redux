import { useDispatch } from "react-redux";
import { toggleUrgency } from "../actions/tasksActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleUrgency = () => {
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
