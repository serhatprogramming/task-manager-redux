import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, description: "Finish the report", urgent: true },
  { id: 2, description: "Buy groceries", urgent: false },
  { id: 3, description: "Call John", urgent: false },
  { id: 4, description: "Prepare presentation", urgent: true },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Math.random().toString(36).slice(2, 11),
        description: action.payload,
        urgent: false,
      };
      state.push(newTask);
    },
    toggleUrgency: (state, action) => {
      const taskId = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.urgent = !task.urgent;
      }
    },
  },
});

export const { addTask, toggleUrgency } = tasksSlice.actions;
export default tasksSlice.reducer;

// const initialState = [
//   { id: 1, description: "Finish the report", urgent: true },
//   { id: 2, description: "Buy groceries", urgent: false },
//   { id: 3, description: "Call John", urgent: false },
//   { id: 4, description: "Prepare presentation", urgent: true },
// ];

// const createTask = (description) => {
//   const randomId = Math.random().toString(36).slice(2, 11);
//   return {
//     id: randomId,
//     description,
//     urgent: false,
//   };
// };

// const tasksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       const newTask = createTask(action.payload);
//       return [...state, newTask];
//     case "TOGGLE_URGENCY":
//       return state.map((task) =>
//         task.id === action.payload ? { ...task, urgent: !task.urgent } : task
//       );
//     default:
//       return state;
//   }
// };

// export default tasksReducer;
