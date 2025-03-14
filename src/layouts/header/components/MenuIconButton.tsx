import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawer } from '../context/DrawerContext';

export function MenuIconButton() {
  const { toggleDrawer } = useDrawer();
  return (
    <IconButton
      onClick={toggleDrawer}
      sx={{ display: { xs: 'block', lg: 'none' } }}
      aria-label="menuIcon"
    >
      <MenuIcon />
    </IconButton>
  );
}
