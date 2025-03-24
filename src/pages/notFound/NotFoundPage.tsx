import { Box, styled, Grid2 as Grid } from "@mui/material";
import { Container } from "../../components/ui/Container";
import { NotFound } from "../../components/ui/NotFound";

export default function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <Container>
        <Grid container justifyContent="center" textAlign="center">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <NotFound />
          </Grid>
        </Grid>
      </Container>
    </NotFoundPageWrapper>
  );
}

const NotFoundPageWrapper = styled(Box)(({ theme }) => ({}));
