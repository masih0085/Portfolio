import { useMediaQuery, useTheme } from "@mui/material";

/**
 * Custom hook to track multiple breakpoints.
 * @returns An object with boolean values for each breakpoint.
 */
export function useBreakpoints() {
  const theme = useTheme();

  return {
    isMobile: useMediaQuery(theme.breakpoints.down("sm")), // < 600px
    isTablet: useMediaQuery(theme.breakpoints.between("sm", "md")), // 600px - 899px
    isDesktop: useMediaQuery(theme.breakpoints.up("md")), // >= 900px
    isBelowMd: useMediaQuery(theme.breakpoints.down("md")), // < 900px
  };
}
