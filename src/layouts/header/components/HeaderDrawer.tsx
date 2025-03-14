import { Drawer, styled } from '@mui/material';
import { useDrawer } from '../context/DrawerContext';

export function HeaderDrawer() {
  const { open, toggleDrawer } = useDrawer();
  return (
    <StyledDrawer open={open} onClose={toggleDrawer} anchor="right">
      sin
    </StyledDrawer>
  );
}

const StyledDrawer = styled(Drawer)({});
