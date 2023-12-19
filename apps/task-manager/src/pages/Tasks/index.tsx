import { CustomIcoButton } from '@ReactTask/react-kit';
import { Box, Stack, Typography } from '@mui/material';

import { AiOutlineDropbox } from 'react-icons/ai';
import Navbar from 'src/components/Navbar';
import Layout from './Layout';

const Tasks = () => {
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
            width: '30%',
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
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <AiOutlineDropbox fontSize={'100px'} />{' '}
            <Typography variant="h6">There are no tasks yet</Typography>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px',
            }}
          >
            <CustomIcoButton icon="IconPlus" />
          </Box>

          {/* <CustomButton label={'Tasks'} onClick={handleNavigate} />

  <CustomButton label={'List'} /> */}
        </Stack>
      </Box>
    </Layout>
  );
};

export default Tasks;
