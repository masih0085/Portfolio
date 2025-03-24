import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { NotFound } from "../../components/ui/NotFound";

export default function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <StyledBox>
        <Container>
          <Grid container justifyContent="center" textAlign="center">
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
              <NotFound />
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </NotFoundPageWrapper>
  );
}

const NotFoundPageWrapper = styled(Box)({
  padding: "32px 48px",
});

const StyledBox = styled(Box)(({ theme }) => ({
  padding: "48px",
  [theme.breakpoints.down("sm")]: {
    padding: "48px 24px",
  },
}));
