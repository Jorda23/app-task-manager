import taskReducer from 'src/store/tasks/slice';
import { render, screen, fireEvent } from '@testing-library/react';

type CustomIcoButtonProps = {
  onClick: () => void; // Define the type for onClick
};

const CustomIcoButton: React.FC<CustomIcoButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>Delete Icon</button>
);

type CustomModalProps = {
  isOpen: boolean;
  handleClose: () => void; // Define the type for handleClose
  children: React.ReactNode;
};

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, handleClose, children }) => (
  isOpen ? <div>{children}<button onClick={handleClose}>Close Modal</button></div> : null
);

type CustomButtonProps = {
  label: string;
  onClick: () => void; // Define the type for onClick
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

// Mocking necessary hooks and components
jest.mock('src/hook/useTaskActions', () => ({
  useTaskActions: jest.fn(),
}));

jest.mock('@ReactTask/react-kit', () => ({
  CustomIcoButton,
  CustomModal,
  CustomButton,
}));


describe('DeleteTask', () => {

  const mockRemoveTask = jest.fn();
  const taskId = '123';

  it('should handle initial state', () => {
    expect(taskReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  test('renders delete icon button', () => {
    expect(screen.getByText('Delete Icon')).toBeInTheDocument();
  });

  test('opens modal on delete icon click', () => {
    fireEvent.click(screen.getByText('Delete Icon'));
    expect(screen.getByText('Are you sure to delete the task?')).toBeInTheDocument();
  });

  test('closes modal on cancel button click', () => {
    fireEvent.click(screen.getByText('Delete Icon'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.queryByText('Are you sure to delete the task?')).not.toBeInTheDocument();
  });

  test('calls removeTask with correct id on delete button click', () => {
    fireEvent.click(screen.getByText('Delete Icon'));
    fireEvent.click(screen.getByText('Delete'));
    expect(mockRemoveTask).toHaveBeenCalledWith(taskId);
  });
});
