import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type TaskId = string;

export interface Task {
  name: string;
}

export interface TaskWithId extends Task {
  id: TaskId;
}

const initialState: TaskWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  return persistedState ? JSON.parse(persistedState).tasks : [];
})();

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload;
      // Use `filter` and make sure to return the new state
      return state.filter((task) => task.id !== id);
    },
  },
});
export default taskSlice.reducer;

export const { addNewTask, deleteTaskById } = taskSlice.actions;
