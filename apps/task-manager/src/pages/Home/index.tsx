import { CustomButton } from '@ReactTask/react-kit';
import { Box, Stack } from '@mui/material';
import { GrTask } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import Layout from 'src/components/Layout';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => () => {
    navigate(path);
  };

  return (
    <Layout>
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
              marginBottom: '20px',
            }}
          >
            <GrTask fontSize={'100px'} />
          </Box>

          <CustomButton label={'Tasks'} onClick={handleNavigation('/tasks')} />

          <CustomButton label={'List'} onClick={handleNavigation('/list')} />
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
