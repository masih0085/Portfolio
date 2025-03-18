import { Box, Card, CardMedia, Stack, styled, Typography } from "@mui/material";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import { StatusChip } from "./StatusChip";
import { StartupProjectProps } from "../types";

export function StartupProject(props: StartupProjectProps) {
  const { description, image, ...otherProps } = props;
  return (
    <StyledCard>
      <Stack direction="row" justifyContent="center" mb="24px">
        <CardMedia component="img" image={image} />
      </Stack>
      <Description>{description}</Description>
      <ChipWrapper>
        <StatusChip {...otherProps} />
      </ChipWrapper>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8",
  borderRadius: "12px",
  padding: "60px 35px",
  [theme.breakpoints.down("sm")]: {
    padding: "40px",
  },
  "& .MuiCardMedia-root": {
    height: "36px",
    width: "auto",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: cssMainColors.secondary,
  textAlign: "center",
  marginBottom: "32px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const ChipWrapper = styled(Box)({
  textAlign: "center",
});
