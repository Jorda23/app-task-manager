import React from 'react';
import {
  CustomIcoButton,
  CustomModal,
  CustomButton,
} from '@ReactTask/react-kit';
import { Box, Tooltip, Typography } from '@mui/material';
import { useTaskActions } from 'src/hook/useTaskActions';

interface Props {
  id: string;
}

export const DeleteTask = ({ id }: Props) => {
  const { removeTask } = useTaskActions();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDeleteTask = () => {
    removeTask(id);
  };

  return (
    <>
      <Tooltip title="Delete Task">
        <div>
          <CustomIcoButton
            icon="IconDelete"
            type="danger"
            onClick={handleOpen}
          />
        </div>
      </Tooltip>

      <CustomModal isOpen={isOpen} handleClose={handleClose}>
        <Typography variant="h5">Are you sure to delete the task?</Typography>

        <Typography fontSize={'14px'}>
          By removing this task, it will be permanently expunged
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '10px',
          }}
        >
          <CustomButton label={'Cancel'} type="default" onClick={handleClose} />
          <CustomButton
            label={'Delete'}
            type="danger"
            onClick={handleDeleteTask}
          />
        </Box>
      </CustomModal>
    </>
  );
};
