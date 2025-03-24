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

// TODO : i will add dark mode colors , i looking for right colors for it

// Light theme
export const lightTheme: Theme = createTheme({
  ...consistentStyles, // Apply consistent styles
});

// Dark theme
export const darkTheme: Theme = createTheme({
  ...consistentStyles, // Apply consistent styles
});
