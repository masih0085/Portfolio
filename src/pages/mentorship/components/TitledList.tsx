import { styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { TitledListProps } from "../types";

export function TitledList(props: TitledListProps) {
  const {targetAudience,title} = props;
  return (
    <>
      <Title variant="h5">{title}</Title>
      <Description>{targetAudience}</Description>
    </>
  );
}

const Title = styled(Typography)({
  fontSize: "16px",
  fontWeight: 700,
  color: cssMainColors.primary,
  marginTop: "50px",
  marginBottom: "8px",
  fontFamily: fonts.georgia,
});

const Description = styled(Typography)({
  fontFamily: fonts.georgia,
  fontSize: "18px",
});
