import {
  Box,
  ListItem,
  Stack,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import Layout from 'src/components/Layout';
import Navbar from 'src/components/Navbar';
import { useGetElementsQuery } from 'src/services/ElementList.services';

interface User {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

const ListManager = () => {
  const { data: elements, error, isLoading } = useGetElementsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!elements) {
    return null;
  }

  return (
    <Layout>
      <Navbar title={'List'} />

      <Box
        sx={{
          height: '100%',
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
              marginTop: '60px',
            }}
          >
            <List
              dense
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            >
              {elements.map((element: User) => (
                <ListItem key={element.id} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar`} src={`${element.avatar}`} />
                    </ListItemAvatar>
                    <ListItemText id={element.id} primary={`${element.name}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default ListManager;
