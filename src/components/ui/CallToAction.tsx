import { Box, styled, Grid2 as Grid, Typography } from "@mui/material";
import { cssMainColors, fonts } from "../../styles/cssVariables/cssVariables";
import { OutlinedCallToActionButton } from "./buttons/OutlinedCallToActionButton";
import { CallToActionProps } from "../../types";

export function CallToAction(props: CallToActionProps) {
  const { description, textButton, title, icon } = props;
  return (
    <StyledBox>
      <Grid container alignItems="center" textAlign="center">
        <GridItem size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Title variant="h2">{title}</Title>
        </GridItem>
        <GridItem size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Description>{description}</Description>
        </GridItem>
        <GridItem size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <OutlinedCallToActionButton startIcon={icon}>
            {textButton}
          </OutlinedCallToActionButton>
        </GridItem>
      </Grid>
    </StyledBox>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  background: cssMainColors.secondary,
  boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a",
  borderRadius: "12px",
  padding: "56px 20px",
  marginTop: "-150px",
  color: cssMainColors.white,
  [theme.breakpoints.down("sm")]: {
    padding: "56px 32px",
  },
}));

const GridItem = styled(Grid)({
  padding: "12px",
});

const Title = styled(Typography)({
  fontSize: "32px",
  fontFamily: fonts.eurostile,
  fontWeight: 800,
});

const Description = styled(Typography)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
});
