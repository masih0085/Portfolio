import { Box, Stack, styled, Typography } from "@mui/material";
import CircleIcon from "../icons/CircleIcon ";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { SubtitleText } from "./SubtitleText";
import { TitledList } from "./TitledList";
import { SkillCardProps } from "../types/index";

export function SkillCard(props: SkillCardProps) {
  const { icon, title, description, details, sx } = props;
  const [subTitleTextDetails, TitledListDetails] = details;
  return (
    <CardWrapper sx={sx}>
      <Stack flexDirection="row" justifyContent="center">
        <CardIconWrapper as="span">
          <CircleIcon />
          {icon}
        </CardIconWrapper>
      </Stack>
      <CardTitle variant="h2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <SubtitleText
        subtitle={subTitleTextDetails.highlightTitle}
        text={subTitleTextDetails.highlightDescription.join("")}
      />
      <TitledList
        items={TitledListDetails.highlightDescription}
        title={TitledListDetails.highlightTitle}
      />
    </CardWrapper>
  );
}

const CardWrapper = styled(Box)({
  padding: "70px 45px",
  height: "100%",
});

const CardIconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "90px",
  height: "72px",
  "& [data-icon]": {
    position: "absolute",
  },
});

const CardTitle = styled(Typography)({
  fontSize: "24px",
  fontFamily: fonts.eurostile,
  color: cssMainColors.secondary,
  fontWeight: 800,
  letterSpacing: "1px",
  margin: "24px 0",
});

const CardDescription = styled(Typography)({
  fontSize: "18px",
  fontFamily: fonts.georgia,
  color: cssMainColors.secondary,
  marginBottom: "36px",
});
