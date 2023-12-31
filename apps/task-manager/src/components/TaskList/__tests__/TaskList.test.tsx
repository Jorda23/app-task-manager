/// <reference types="node" />

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { TaskList } from '..';
import { useAppSelector } from 'src/hook/store';
import { TaskWithId } from 'src/store/tasks/slice';
import '@testing-library/jest-dom';
import { store } from 'src/store';
import { Provider } from 'react-redux';

// Mock the fetch function
global.fetch = jest.fn();

jest.mock('src/hook/store', () => ({
  ...jest.requireActual('src/hook/store'),
  useAppSelector: jest.fn(),
}));

describe('TaskList', () => {
  beforeEach(() => {
    // Reset the mock before each test
    (useAppSelector as jest.Mock).mockReset();
  });

  test('renders the correct number of tasks', () => {
    const mockTasks: TaskWithId[] = [
      { id: '1', name: 'Task 1' },
      { id: '2', name: 'Task 2' },
    ];

    (useAppSelector as jest.Mock).mockReturnValue(mockTasks);

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    // Check if the correct number of tasks are rendered
    const taskItems = screen.getAllByRole('listitem');
    expect(taskItems).toHaveLength(mockTasks.length);

    mockTasks.forEach((task) => {
      expect(screen.getByText(task.name)).toBeInTheDocument();
    });
  });

  test('interacts correctly with DeleteTask component', () => {
    const mockTasks: TaskWithId[] = [
      { id: '1', name: 'Task 1' },
      { id: '2', name: 'Task 2' },
    ];

    (useAppSelector as jest.Mock).mockReturnValue(mockTasks);

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    mockTasks.forEach((task) => {
      const taskTextElement = screen.getByText(task.name);
      const listItem = taskTextElement.closest('li');

      if (!listItem) {
        throw new Error(`List item for task "${task.name}" not found.`);
      }

      const deleteButton = within(listItem).getByLabelText('deleteTask');
      expect(deleteButton).toBeInTheDocument();
    });
  });

  test('renders correctly with an empty task list', () => {
    (useAppSelector as jest.Mock).mockReturnValue([]);

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    // Check that no list items are rendered
    const taskItems = screen.queryAllByRole('listitem');
    expect(taskItems).toHaveLength(0);
  });

  test('renders tasks from Redux state', () => {
    (useAppSelector as jest.Mock).mockReturnValue([
      { id: '1', name: 'Task 1' },
      { id: '2', name: 'Task 2' },
    ]);

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
