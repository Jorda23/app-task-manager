import React, { ChangeEvent } from 'react';
import {
  CustomIcoButton,
  CustomModal,
  CustomButton,
  InputText
} from '@ReactTask/react-kit';
import { Box, Typography } from '@mui/material';
import { useTaskActions } from 'src/hook/useTaskActions';

export const CreateNewTask = () => {
  const { addTask } = useTaskActions();

  const [taskName, setTaskName] = React.useState('');
  const [error, setError] = React.useState('');

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setError('');
  };

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    setError(''); 
  };

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      // Set the error message if the input is empty
      setError('Please enter a task name before adding.');
    } else {
      addTask({ name: taskName });
      handleClose();
      setTaskName('');
    }
  };
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <CustomIcoButton icon="IconPlus" handleAdd={handleOpen} />
      </Box>

      <CustomModal isOpen={isOpen} handleClose={handleClose}>
        <Typography variant="h5">Add Task</Typography>

        <InputText
          error={error}
          value={taskName}
          onChange={handleTaskNameChange}
        />
      
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
          }}
        >
          <CustomButton label={'Cancel'} type="danger" onClick={handleClose} />
          <CustomButton label={'Add'} type="success" onClick={handleAddTask} />
        </Box>
      </CustomModal>
    </>
  );
};
