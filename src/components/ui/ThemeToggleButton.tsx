import { IconButton, styled } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../context/ThemeContext';
import { cssMainColors } from '../../styles/cssVariables/cssVariables';

export function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <StyledIconButton isDarkMode={isDarkMode} onClick={toggleTheme}>
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </StyledIconButton>
  );
}

interface StyledIconButtonProps {
  isDarkMode: boolean;
}

const StyledIconButton = styled(IconButton)<StyledIconButtonProps>(
  ({ isDarkMode }) => ({
    marginLeft: '15px',
    color: isDarkMode ? cssMainColors.warmOrange : cssMainColors.charcoalGray,
  }),
);
