import { styled } from "@mui/material";
import {
  ContainedBaseButton,
  ContainedBaseButtonProps,
} from "../../base/containedButton";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";

export  function ContainedSecondaryButton(
  props: ContainedBaseButtonProps
) {
  return <StyledButton {...props} />;
}

const StyledButton = styled(ContainedBaseButton)({
  fontSize: "20px",
  fontFamily: fonts.georgia,
  color: cssMainColors.mintGreen,
  background: cssMainColors.secondary,
  padding: "25px 40px",
  marginTop: "32px",
  borderRadius: "9999px",
  whiteSpace: "nowrap",
});
