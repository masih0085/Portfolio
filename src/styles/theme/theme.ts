// src/theme/theme.ts
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';

// Consistent styles for both light and dark modes
const consistentStyles: ThemeOptions = {};

// Light theme
export const lightTheme: Theme = createTheme({
  ...consistentStyles, // Apply consistent styles
});

// Dark theme
export const darkTheme: Theme = createTheme({
  ...consistentStyles, // Apply consistent styles
});
