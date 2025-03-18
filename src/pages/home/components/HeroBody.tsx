import { styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { HeroBodyProps } from "../../../types";
import { useBreakpoints } from "../../../styles/theme/hooks/useBreakpoints";
import { heroAvatarImage } from "../../../assets/images/index";

export function HeroBody(props: HeroBodyProps) {
  const { isMobile, isTablet } = useBreakpoints();
  const { text, title } = props;

  return (
    <>
      <HeroTitle variant="h1">{title}</HeroTitle>
      <HeroText>{text}</HeroText>
      <HeroBodyImg
        src={heroAvatarImage}
        width={isMobile || isTablet ? 150 : 210}
      />
    </>
  );
}

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "45px",
  wordBreak: "break-word",
  marginBottom: "24px",
  color: cssMainColors.secondary,

  [theme.breakpoints.between("sm", "md")]: {
    // tablet break point
    fontSize: "32px",
  },

  [theme.breakpoints.down("sm")]: {
    //mobile break point
    fontSize: "30px",
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 400,
  wordBreak: "break-word",
  marginBottom: "24px",
  fontFamily: fonts.georgia,

  [theme.breakpoints.between("sm", "md")]: {
    // tablet break point
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    //mobile break point
    fontSize: "20px",
  },
}));

const HeroBodyImg = styled("img")({
  margin: "32px 0",
  maxWidth: "100%",
  height: "auto",
});
