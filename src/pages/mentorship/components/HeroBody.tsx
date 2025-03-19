import { Box, styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { HeroBodyProps } from "../../../types";

export function HeroBody(props: HeroBodyProps) {
  const { text, title } = props;
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

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontFamily: fonts.eurostile,
  fontWeight: 800,
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontFamily: fonts.georgia,
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));
