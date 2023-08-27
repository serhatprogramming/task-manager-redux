import axios from "axios";

const backendUrl = "http://localhost:3001/tasks";

const getTasks = async () => {
  const response = await axios.get(backendUrl);
  return response.data;
};

const createTask = async (newTask) => {
  const response = await axios.post(backendUrl, newTask);
  return response.data;
};

const updateTask = async (taskId, updatedTask) => {
  const response = await axios.put(`${backendUrl}/${taskId}`, updatedTask);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasks,
  createTask,
  updateTask,
};
