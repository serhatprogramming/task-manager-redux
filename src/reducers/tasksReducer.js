import { createSlice } from "@reduxjs/toolkit";
import taskService from "../services/taskService";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleUrgency: (state, action) => {
      const taskId = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.urgent = !task.urgent;
      }
    },
    initializeTasks(state, action) {
      return action.payload;
    },
  },
});

export const { addTask, toggleUrgency, initializeTasks } = tasksSlice.actions;
export default tasksSlice.reducer;

// Async action creators
export const fetchInitTasks = () => {
  return async (dispatch) => {
    const tasks = await taskService.getTasks();
    dispatch(initializeTasks(tasks));
  };
};

export const createTask = (description) => {
  return async (dispatch) => {
    const task = { description, urgent: false };
    const newTask = await taskService.createTask(task);
    dispatch(addTask(newTask));
  };
};

export const toggleTaskUrgency = (task) => {
  return async (dispatch) => {
    await taskService.updateTask(task.id, { ...task, urgent: !task.urgent });
    dispatch(toggleUrgency(task.id));
  };
};
