import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default (function Layout({ children }: { children: ReactNode }) {
  return (
    <Box
      minHeight="100vh"
      sx={{
        bgcolor: '#c1d4cb',
      }}
    >
      {children}
    </Box>
  );
});
