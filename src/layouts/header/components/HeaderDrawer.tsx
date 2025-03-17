import { Drawer, List, ListItem, styled } from "@mui/material";
import { useDrawer } from "../context/DrawerContext";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { Link } from "react-router-dom";
import { OutlinedPrimaryButton } from "../../../components/ui/buttons/OutlinedPrimary";

const drawerWidth = 240;

export function HeaderDrawer() {
  const { open, toggleDrawer } = useDrawer();
  return (
    <StyledDrawer open={open} onClose={toggleDrawer} anchor="right">
      <List>
        <StyledListItem onClick={toggleDrawer}>
          <StyledLink to="/mentorship">Mentorship</StyledLink>
        </StyledListItem>
        <StyledListItem onClick={toggleDrawer}>
          <Link to="/concat">
            <OutlinedPrimaryButton>Say Hello</OutlinedPrimaryButton>
          </Link>
        </StyledListItem>
      </List>
    </StyledDrawer>
  );
}

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
});

const StyledLink = styled(Link)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  color: cssMainColors.secondary,
  transition: "all .2s ease-in-out",
  fontWeight: 400,
  "&:hover": {
    color: cssMainColors.primary,
  },
});

const StyledListItem = styled(ListItem)({
  justifyContent: "center",
});
