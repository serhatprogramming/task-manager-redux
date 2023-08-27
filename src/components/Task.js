import { useDispatch } from "react-redux";
import { toggleTaskUrgency } from "../reducers/tasksReducer";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleUrgency = async () => {
    dispatch(toggleTaskUrgency(task));
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
