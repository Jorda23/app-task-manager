import { Typography } from '@mui/material';
import React from 'react';
import { AiOutlineDropbox } from 'react-icons/ai';

export const EmptyTaskMessage = () => {
  return (
    <>
      <AiOutlineDropbox fontSize={'100px'} />
      <Typography variant="h6">There are no tasks yet</Typography>
    </>
  );
};
