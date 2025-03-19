import { Box, styled, Grid2 as Grid } from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { Container } from "../../components/ui/Container";
import { InfoCard } from "../../components/ui/InfoCard";

export function MentoringStyleSection() {
  return (
    <MentoringStyleSectionWrapper>
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <InfoCard
              text="I strive to function as a catalyst and challenge you to grow as both a designer and a human. I care about the details and will encourage you to think, plan, and dream. These are the qualities I will bring to every conversation."
              title="My Mentoring Style"
            />
          </Grid>
        </Grid>
      </Container>
    </MentoringStyleSectionWrapper>
  );
}

const MentoringStyleSectionWrapper = styled(Box)(({ theme }) => ({
  padding: "144px 72px 224px 72px",
  textAlign: "center",
  backgroundColor: cssMainColors.primary,
  color: cssMainColors.white,
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 192px 24px",
  },
}));
