import { Box, styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { HeroBodyProps } from "../../../types";

export function HeroBody(props:HeroBodyProps) {
    const {text,title}=props
  return (
    <Wrapper>
      <Title variant="h1">{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled(Box)({
  color: cssMainColors.secondary,
  padding: "12px",
});

const Title = styled(Typography)({
  fontSize: "48px",
  fontFamily: fonts.eurostile,
  fontWeight: 800,
  marginBottom: "24px",
});

const Text = styled(Typography)({
  fontSize: "24px",
  fontFamily: fonts.georgia,
});
