import { styled, Typography } from "@mui/material";
import { OutlinedPrimaryButton } from "./buttons/OutlinedPrimary";
import { Link } from "react-router-dom";
import { LostCompassIcon } from "../icons/LostCompassIcon";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
export function NotFound() {
  return (
    <NotFoundWrapper>
      <LostCompassIcon />
      <NotFoundTitle variant="h2">Looks like you're lost</NotFoundTitle>
      <NotFoundText>Maybe try a different page?</NotFoundText>
      <Link to="/">
        <StyledOutlinedPrimaryButton>Return home</StyledOutlinedPrimaryButton>
      </Link>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled(Typography)({
  color: cssMainColors.secondary,
});

const NotFoundTitle = styled(Typography)({
  fontSize: "48px",
  fontFamily: fonts.eurostile,
  marginBottom: "24px",
});

const NotFoundText = styled(Typography)({
  fontSize: "20px",
  fontFamily: fonts.georgia,
  marginBottom: "24px",
});

const StyledOutlinedPrimaryButton = styled(OutlinedPrimaryButton)({
  padding: "9px 25px",
  fontSize: "20px",
  marginTop: "16px",
});
