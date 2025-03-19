import { Box, Card, Stack, styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { CircleIcon } from "../../../components/icons/CircleIcon ";
import { TitledList } from "./TitledList";
import { ContainedSecondaryButton } from "../../../components/ui/buttons/ContainedSecondaryButton";
import { PricingCardProps } from "../types";

export function PricingCard(props: PricingCardProps) {
  const { buttonText, description, icon, price, details, title } = props;
  return (
    <StyledCard>
      <Stack direction="row" justifyContent="center">
        <CardIconWrapper>
          <CircleIcon />
          {icon}
        </CardIconWrapper>
      </Stack>
      <Title variant="h4">{title}</Title>
      <Price variant="h3">{price}</Price>
      <Description>{description}</Description>
      <TitledList
        targetAudience={details.targetAudience}
        title={details.title}
      />
      <ContainedSecondaryButton width="100%">
        {buttonText}
      </ContainedSecondaryButton>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;",
  background: cssMainColors.white,
  borderRadius: "12px",
  padding: "60px 35px",
  color: cssMainColors.secondary,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    padding: "40px 30px",
  },
}));

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
  fontWeight: "800",
  margin: "24px 0",
  fontFamily: fonts.eurostile,
});

const Price = styled(Typography)({
  fontSize: "40px",
  fontWeight: 800,
  marginBottom: "24px",
  color: cssMainColors.primary,
  fontFamily: fonts.eurostile,
});

const Description = styled(Typography)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  marginBottom: "32px",
});
