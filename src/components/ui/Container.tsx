import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1400px',
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(2),
}));
