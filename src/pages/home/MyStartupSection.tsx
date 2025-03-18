import { Box, styled, Grid2 as Grid } from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { InfoCard } from "../../components/ui/InfoCard";
import { Container } from "../../components/ui/Container";

export function MyStartupSection() {
  return (
    <MyStartupSectionWrapper>
      <Container>
        <Grid container justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
            textAlign="center"
          >
            <InfoCard
              title="My Startup Projects"
              text="I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own."
            />
          </Grid>
        </Grid>
      </Container>
    </MyStartupSectionWrapper>
  );
}

const MyStartupSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: cssMainColors.primary,
  color: cssMainColors.white,
  padding: "144px 72px 224px 72px",
  [theme.breakpoints.down("md")]: {
    padding: "80px 24px 192px 24px",
  },
}));
