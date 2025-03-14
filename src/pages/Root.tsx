import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../layouts/header/Heard';
import {Footer} from '../layouts/footer/Footer';

function RootLayout() {
  return (
    <StyledLayout>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
  background: '#ffffff',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    overflowX: 'hidden',
  },
}));

const MainWrapper = styled('main')(() => ({
  flex: 1,
  paddingTop: '40px',
  marginTop: '120px',
}));

export default RootLayout;
