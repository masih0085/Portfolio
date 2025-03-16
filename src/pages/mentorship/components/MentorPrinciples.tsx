import { Box, Card, Stack, styled, Typography } from "@mui/material";
import { CircleIcon } from "../../../components/icons/CircleIcon ";

import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { MentorPrinciplesProps } from "../types";

export function MentorPrinciples(props: MentorPrinciplesProps) {
  const { icon, text, title } = props;
  return (
    <StyledCard>
      <Stack justifyContent="center" alignItems="center">
        <CardIconWrapper>
          <CircleIcon />
          {icon}
        </CardIconWrapper>
      </Stack>
      <Title variant="h3">{title}</Title>
      <Text variant="body1">{text}</Text>
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  boxShadow: "none",
  color: cssMainColors.secondary,
  textAlign: "center",
});

const CardIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "90px",
  height: "72px",
  color: cssMainColors.secondary,
  "& [data-icon]": {
    position: "absolute",
  },
});

const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: 800,
  fontFamily: fonts.eurostile,
  margin: "24px 0",
});

const Text = styled(Typography)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  marginTop: "12px",
});
