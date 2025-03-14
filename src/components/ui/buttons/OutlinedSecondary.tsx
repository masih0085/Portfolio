import { styled } from "@mui/material";
import {
  OutlinedBaseButton,
  OutlinedBaseButtonProps,
} from "../../base/outlinedButton/index";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";

export function OutlinedSecondaryButton(props: OutlinedBaseButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled(OutlinedBaseButton)(() => ({
  border: `2px solid ${cssMainColors.primary}`,
  backgroundColor: "transparent",
  borderRadius: "45px",
  fontFamily: fonts.georgia,
  color: cssMainColors.white,
  "&.MuiButton-outlined:hover ": {
    backgroundColor: cssMainColors.primary,
    color: cssMainColors.white,
  },
  "& > .MuiButton-endIcon": {
    marginLeft: "4px",
  },
}));
