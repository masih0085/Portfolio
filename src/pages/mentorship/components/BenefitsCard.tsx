import { Box, styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { BenefitsCardProps } from "../types";

export function BenefitsCard(props: BenefitsCardProps) {
  const { icon, text, title } = props;
  return (
    <BenefitsCardWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title variant="h3">{title}</Title>
      <Text>{text}</Text>
    </BenefitsCardWrapper>
  );
}

const BenefitsCardWrapper = styled(Box)({
  color: cssMainColors.secondary,
  textAlign: "center",
});

const IconWrapper = styled(Box)({
  marginBottom: "27px",
});

const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: 800,
  fontFamily: fonts.eurostile,
  marginBottom: "24px",
});

const Text = styled(Typography)({
  fontSize: "17px",
  fontFamily: fonts.georgia,
  marginBottom: "16px",
  wordBreak: "break-all",
});
