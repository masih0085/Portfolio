import {
  Box,
  Card,
  CardMedia,
  Grid2 as Grid,
  styled,
  Typography,
} from "@mui/material";
import { Container } from "../../../components/ui/Container";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { CollaborationProps } from "../types";

export function Collaboration(props: CollaborationProps) {
  const { images } = props;
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <Title variant="h2">
            I'm proud to have collaborated with some awesome companies:
          </Title>
        </Grid>
      </Grid>
      <StyledBox>
        <Grid container>
          {images.map(({ alt, image }) => {
            return (
              <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }} key={alt}>
                <StyledCard>
                  <CardMedia component="img" image={image} alt={alt} />
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
      </StyledBox>
    </Container>
  );
}

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 800,
  color: cssMainColors.secondary,
  fontFamily: fonts.eurostile,
  textAlign: "center",
  [theme.breakpoints.down('md')]: {
    fontSize: "24px",
  },
}));

const StyledBox = styled(Box)({
  paddingTop: "48px",
});

const StyledCard = styled(Card)({
  boxShadow: "none",
  padding: "12px",
});
