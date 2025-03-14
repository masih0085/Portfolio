import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { FeedbackSlider } from "../../components/ui/FeedbackSlider";
import { testimonialsData } from "../../data/testimonialsData";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionWrapper>
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <FeedbackSlider items={testimonialsData}/>
          </Grid>
        </Grid>
      </Container>
    </TestimonialsSectionWrapper>
  );
}

const TestimonialsSectionWrapper = styled(Box)({
  padding: "144px 72px",
  borderTop: "1px solid #E6ECF8",
});
