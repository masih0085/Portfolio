import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { PricingCard } from "./components/PriceCard";
import { pricingData } from "../../data/pricingData";
import { Callout } from "../../components/ui/Callout";
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";

export function PricingSection() {
  return (
    <PricingSectionWrapper>
      <Container>
        <StyledBox>
          <Grid container justifyContent="center">
            {pricingData.map((data) => {
              return (
                <StyledGridItem size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                  <PricingCard {...data} />
                </StyledGridItem>
              );
            })}
          </Grid>
        </StyledBox>
        <Callout
          title="If you're wanting to level up, mentorship helps."
          description="Schedule a free consultation to ask questions, discuss details, and decide if it's a fit."
          link="#"
          buttonName="Introduce yourself"
          icon={<BackHandOutlinedIcon />}
        />
      </Container>
    </PricingSectionWrapper>
  );
}

const PricingSectionWrapper = styled(Box)(({ theme }) => ({
  padding: "80px 24px 144px 24px",
  marginTop: "-224px",
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 96px 24px",
    marginTop: "-208px",
  },
}));

const StyledBox = styled(Box)({
  marginBottom: "96px",
});

const StyledGridItem = styled(Grid)({
  padding: "12px",
});
