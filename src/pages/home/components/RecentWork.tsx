import {
  styled,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { OutlinedSecondaryButton } from "../../../components/ui/buttons/OutlinedSecondary";
import { Link } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import { RecentWorkProps } from "../types";

export function RecentWork(props:RecentWorkProps) {
  const {alt,hrefLink,image,overLayTitle}= props
  return (
    <StyledCard>
      <CardMedia component="img" alt={alt} image={image} />
      <OverlyText>
        <OverlyTitle variant="h2">
         {overLayTitle}
        </OverlyTitle>
        <OverlyActions>
          <Link to={hrefLink}>
            <OutlinedSecondaryButton endIcon={<ChevronRight />}>
              Visit Website
            </OutlinedSecondaryButton>
          </Link>
        </OverlyActions>
      </OverlyText>
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  boxShadow: "none",
  borderRadius: "12px",
  position: "relative",
  "& .MuiCardMedia-root": {
    scale: 1,
    transition: ".25s ease-in-out",
  },
  "&:hover .MuiCardMedia-root": {
    scale: 1.1,
  },

  "&:hover .MuiCardContent-root": {
    opacity: 1,
  },
});

const OverlyText = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "absolute",
  backgroundColor: cssMainColors.secondary,
  width: "100%",
  height: "100%",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  opacity: 0,
  transition: ".45s ease-in-out",
  padding: "0 32px",
  "&.MuiCardContent-root:last-child": {
    paddingBottom: "0",
  },
});

const OverlyTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: 500,
  fontFamily: fonts.eurostile,
  color: cssMainColors.white,
  marginBottom: "28.8px",
  textAlign: "center",
});

const OverlyActions = styled(CardActions)({
  justifyContent: "center",
});
