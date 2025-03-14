import { styled, Typography } from "@mui/material";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { SubtitleTextProps } from "../types";

export function SubtitleText(props: SubtitleTextProps) {
  const { subtitle, text } = props;
  return (
    <>
      <Subtitle variant="h3">{subtitle}:</Subtitle>
      <Text>{text}</Text>
    </>
  );
}

const Subtitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: 400,
  fontFamily: fonts.georgia,
  color: cssMainColors.primary,
  marginTop: "50px",
  marginBottom: "8px",
});

const Text = styled(Typography)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  color:cssMainColors.secondary,
  marginBottom: "36px",
});
