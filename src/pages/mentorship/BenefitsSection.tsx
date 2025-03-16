import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { InfoCard } from "../../components/ui/InfoCard";
import { BenefitsCard } from "./components/BenefitsCard";
import { benefitsData } from "../../data/benefitsData";

export function BenefitsSection() {
  return (
    <BenefitsSectionWrapper>
      <Container>
        <Grid container justifyContent="center">
          <StyledGridItemInfo
            size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
            textAlign="center"
          >
            <InfoCard
              text="I know a thing or two because I've done a thing or two in my design career, and I'm committed to helping you make use of that knowledge."
              title="Benefits of Mentorship"
            />
          </StyledGridItemInfo>
        </Grid>
        <StyledBox>
          <Grid container>
            {benefitsData.map((data) => {
              return (
                <StyledGridItemBenefits
                  size={{ xs: 12, sm: 12, md: 12, lg: 2.4, xl: 2.4 }}
                >
                  <BenefitsCard {...data} />
                </StyledGridItemBenefits>
              );
            })}
          </Grid>
        </StyledBox>
      </Container>
    </BenefitsSectionWrapper>
  );
}

const BenefitsSectionWrapper = styled(Box)({
  borderTop: "1px solid #E6ECF8",
  padding: "144px 72px",
});

const StyledGridItemInfo = styled(Grid)({
  padding: "12px",
});

const StyledBox = styled(Box)({
  paddingTop: "64px",
});

const StyledGridItemBenefits = styled(Grid)({
  padding: "12px 16px",
});
