import taskReducer, {
  addNewTask,
  Task,
  TaskWithId,
} from 'src/store/tasks/slice';

describe('CreateNewTask', () => {
  it('should handle addNewTask', () => {
    const newTask: Task = { name: 'Test Task' };
    const initialState: TaskWithId[] = [];
    const nextState = taskReducer(initialState, addNewTask(newTask));

    expect(nextState.length).toBe(1);
    expect(nextState[0]).toEqual(expect.objectContaining(newTask));
  });
});
