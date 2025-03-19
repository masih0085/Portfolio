// src/theme/theme.ts
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

// Consistent styles for both light and dark modes
const consistentStyles :ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

// Light theme
export const lightTheme: Theme = createTheme({
  ...consistentStyles, // Apply consistent styles
});

// Dark theme
export const darkTheme: Theme = createTheme({
  ...consistentStyles, // Apply consistent styles
});
