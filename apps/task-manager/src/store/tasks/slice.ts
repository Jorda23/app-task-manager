import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

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

const taskSlice: Slice<
  TaskWithId[],
  {
    addNewTask: (state: TaskWithId[], action: PayloadAction<Task>) => void;
    deleteTaskById: (
      state: TaskWithId[],
      action: PayloadAction<TaskId>
    ) => TaskWithId[];
  }
> = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
    },
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export default taskSlice.reducer;

export const { addNewTask, deleteTaskById } = taskSlice.actions;
