const TaskForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Submitted");
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task description" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
