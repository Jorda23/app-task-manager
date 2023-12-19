import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import { AiOutlineDropbox } from 'react-icons/ai';
import Layout from 'src/components/Layout';
import Navbar from 'src/components/Navbar';
import React from 'react';
import { CreateNewTask } from './components/CreateNewTask';
import { useAppSelector } from 'src/hook/store';
import { TaskWithId } from 'src/store/tasks/slice';

const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <Layout>
      <Navbar title={'Tasks'} />

      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent={'center'}
          sx={{
            width: '100%',
            height: '100%',
            gap: '20px',
            padding: '20px',
          }}
        >
          <Box
             sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '60px',
            }}
          >
            {tasks.length === 0 ? (
              <>
                <AiOutlineDropbox fontSize={'100px'} />
                <Typography variant="h6">There are no tasks yet</Typography>
              </>
            ) : (
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                {tasks.map((value: TaskWithId) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value.id} disablePadding>
                      <ListItemButton role={undefined} dense>
                        <ListItemText id={labelId} primary={`${value.name}`} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Box>

          <CreateNewTask />
        </Stack>
      </Box>
    </Layout>
  );
};

export default Tasks;
