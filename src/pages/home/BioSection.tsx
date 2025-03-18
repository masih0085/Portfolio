import { Box, styled, Grid2 as Grid } from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { Container } from "../../components/ui/Container";
import { InfoCard } from "../../components/ui/InfoCard";

export function BioSection() {
  return (
    <BoiWrapper>
      <Container>
        <Grid container justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
            textAlign="center"
          >
            <InfoCard
              title={"Hi, I’m Matt. Nice to meet you."}
              text={
                "Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </BoiWrapper>
  );
}

const BoiWrapper = styled(Box)(({ theme }) => ({
  padding: "144px 72px 288px",
  color: cssMainColors.white,
  backgroundColor: cssMainColors.primary,
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 224px",
  },
}));
