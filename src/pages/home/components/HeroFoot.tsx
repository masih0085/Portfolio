import { Container, Grid2 as Grid, styled } from '@mui/material';

import heroFootImage from '../../../assets/images/heroFoot.webp';

export function HeroFoot() {
  return (
    <Container sx={{ paddingTop: '0', paddingBottom: '0' }}>
      <Grid container justifyContent="center">
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}
          textAlign="center"
        >
          <HeroFootImg src={heroFootImage} width={860} />
        </Grid>
      </Grid>
    </Container>
  );
}

const HeroFootImg = styled('img')({
  margin: '0 0 -6.9px 0',
  maxWidth: '100%',
  height: 'auto',
});
