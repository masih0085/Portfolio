import { AppBar, Box, styled, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { OutlinedPrimaryButton } from "../../components/ui/buttons/OutlinedPrimary";
import { MenuIconButton } from "./components/MenuIconButton";
import { HeaderDrawer } from "./components/HeaderDrawer";
import { MainSiteLogo } from "../../components/icons/MainSiteLogo";
import { ThemeToggleButton } from "../../components/ui/ThemeToggleButton";
import { useBreakpoints } from "../../styles/theme/hooks/useBreakpoints";

export function Header() {
  const { isMobile } = useBreakpoints();

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Link to="/">
          <MainSiteLogo
            width={isMobile ? "85px" : "90px"}
            height={isMobile ? "68px" : "72px"}
            color="rgb(110, 7, 243)"
          />
        </Link>
        <Box component="nav" sx={{ display: { xs: "none", lg: "block" } }}>
          <StyledLink to="/mentorship">Mentorship</StyledLink>
          <Link to="/concat">
            <OutlinedPrimaryButton>Say Hello</OutlinedPrimaryButton>
          </Link>
          <ThemeToggleButton />
        </Box>
        <MenuIconButton />

        {/* mobile menu */}
        <HeaderDrawer />
      </StyledToolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: cssMainColors.white,
  padding: "27px 67px",
  ["&.MuiAppBar-root"]: {
    "box-shadow": "none",
    padding: "20px 0",
  },
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const StyledLink = styled(Link)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  color: cssMainColors.secondary,
  transition: "all .2s ease-in-out",
  fontWeight: 400,
  marginRight: "25px",
  "&:hover": {
    color: cssMainColors.primary,
  },
});
