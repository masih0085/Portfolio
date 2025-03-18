import { Stack, styled } from "@mui/material";
import { ICONS } from "../constants";
import { Link } from "react-router-dom";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";

export function SocialIcons() {
  return (
    <StyledStack>
      {ICONS.map(({ socialIcon, id }) => {
        return (
          <IconLink to="#" key={id}>
            {socialIcon}
          </IconLink>
        );
      })}
    </StyledStack>
  );
}

const IconLink = styled(Link)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "47px",
  height: "47px",
  borderRadius: "100%",
  fontSize: "18px",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  transition: "all .2s ease-in-out",
  "&:hover": {
    color: cssMainColors.primary,
    background: cssMainColors.white,
    border: ` 2px solid ${cssMainColors.white}`,
  },
  color: cssMainColors.white,
});

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "25px",
  justifyContent: "center",
  marginBottom: "56px",
  [theme.breakpoints.down("sm")]: {
    gap: "6px",
    marginBottom: "48px",

  },
}));
