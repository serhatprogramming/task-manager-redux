import { createSlice } from "@reduxjs/toolkit";

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
