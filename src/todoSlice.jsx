import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
      console.log(action);
    },
    addDelete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, addDelete } = todoSlice.actions;

export default todoSlice.reducer;
