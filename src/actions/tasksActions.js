export const addTask = (description) => {
  return {
    type: "ADD_TASK",
    payload: description,
  };
};

export const toggleUrgency = (taskId) => {
  return {
    type: "TOGGLE_URGENCY",
    payload: taskId,
  };
};
