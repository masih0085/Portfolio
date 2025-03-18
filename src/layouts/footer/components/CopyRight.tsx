import { styled, Typography } from '@mui/material';
import { CopyRIghtIcon } from '../icons';

export function CopyRight() {
  return (
    <StyledTypography variant="body1" textAlign="center">
      Handcrafted by amin
      <IconWrapper>
        <CopyRIghtIcon />
      </IconWrapper>
      twentytwentyfour
    </StyledTypography>
  );
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  opacity: 0.8,
  fontSize: "18px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "17px",
  },
}));

const IconWrapper = styled('span')({
  verticalAlign: '-4px',
  padding: '0 4px',
});
