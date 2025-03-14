import { styled } from "@mui/material";
import {
  OutlinedBaseButton,
  OutlinedBaseButtonProps,
} from "../../base/outlinedButton/index";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";

export function OutlinedCallToActionButton(props: OutlinedBaseButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled(OutlinedBaseButton)(() => ({
  border: `2px solid ${cssMainColors.mintGreen}`,
  backgroundColor: "transparent",
  borderRadius: "45px",
  color: cssMainColors.white,
  padding: "25px 40px",
  fontFamily: fonts.georgia,
  "&.MuiButton-outlined:hover ": {
    backgroundColor: cssMainColors.mintGreen,
    color: cssMainColors.secondary,
  },
  "& > .MuiButton-endIcon": {
    marginLeft: "4px",
  },
}));
