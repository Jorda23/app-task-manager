// Import necessary dependencies for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateNewTask } from '../index';
import { useTaskActions } from 'src/hook/useTaskActions';
import '@testing-library/jest-dom';


// Mock the useTaskActions hook
jest.mock('src/hook/useTaskActions', () => ({
  useTaskActions: jest.fn(() => ({
    addTask: jest.fn(),
  })),
}));

describe('CreateNewTask', () => {
  it('renders the component correctly', () => {
    render(<CreateNewTask />);

    // Ensure the "Add Task" button is present
    expect(screen.getByTitle('Add Task')).toBeInTheDocument();
  });

  it('opens the modal when the "Add Task" button is clicked', () => {
    render(<CreateNewTask />);
    userEvent.click(screen.getByTitle('Add Task'));

    // Ensure the modal is rendered
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('closes the modal when the "Cancel" button is clicked', () => {
    render(<CreateNewTask />);
    userEvent.click(screen.getByTitle('Add Task'));

    // Ensure the modal is rendered
    expect(screen.getByText('Add Task')).toBeInTheDocument();

    // Click the "Cancel" button
    userEvent.click(screen.getByText('Cancel'));

    // Ensure the modal is closed
    expect(screen.queryByText('Add Task')).toBeNull();
  });

  it('adds a task when the "Add" button is clicked with a non-empty task name', () => {
    render(<CreateNewTask />);
    userEvent.click(screen.getByTitle('Add Task'));

    // Ensure the modal is rendered
    expect(screen.getByText('Add Task')).toBeInTheDocument();

    // Type a task name into the input
    userEvent.type(screen.getByRole('textbox'), 'New Task');

    // Click the "Add" button
    userEvent.click(screen.getByText('Add'));

    // Ensure that the addTask function is called with the correct task name
    expect(useTaskActions().addTask).toHaveBeenCalledWith({ name: 'New Task' });

    // Ensure the modal is closed
    expect(screen.queryByText('Add Task')).toBeNull();
  });

  it('displays an error when trying to add a task with an empty task name', () => {
    render(<CreateNewTask />);
    userEvent.click(screen.getByTitle('Add Task'));

    // Ensure the modal is rendered
    expect(screen.getByText('Add Task')).toBeInTheDocument();

    // Click the "Add" button without entering a task name
    userEvent.click(screen.getByText('Add'));

    // Ensure an error message is displayed
    expect(screen.getByText('Please enter a task name before adding.')).toBeInTheDocument();
  });
});
