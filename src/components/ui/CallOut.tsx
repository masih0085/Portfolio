import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { OutlinedPrimaryButton } from "./buttons/OutlinedPrimary";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { CallOutProps } from "../../types";

export function Callout(props: CallOutProps) {
  const { buttonName, description, icon, title, link } = props;
  return (
    <CallOutWrapper>
      <Title variant="h2">{title}</Title>
      <Description>{description}</Description>
      <Link to={link}>
        <StyledOutlinedPrimaryButton startIcon={icon}>
          {buttonName}
        </StyledOutlinedPrimaryButton>
      </Link>
    </CallOutWrapper>
  );
}

const CallOutWrapper = styled(Box)({
  textAlign: "center",
});

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontFamily: fonts.eurostile,
  fontWeight: 700,
  color: cssMainColors.secondary,
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontFamily: fonts.georgia,
  color: cssMainColors.secondary,
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
}));

const StyledOutlinedPrimaryButton = styled(OutlinedPrimaryButton)({
  padding: "25px 40px",
  marginTop: "32px",
});
