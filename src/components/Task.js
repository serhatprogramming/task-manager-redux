const Task = ({ task }) => {
  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "Urgent: Yes " : "Urgent: No "}</em>
      </span>
      <button>{task.urgent ? "Make Non-Urgent" : "Make Urgent"}</button>
    </div>
  );
};

export default Task;
