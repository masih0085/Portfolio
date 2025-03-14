import { Chip, styled } from "@mui/material";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { StatusChipProps, StatusType } from "../types";
import {
  cssMainColors,
  fonts,
} from "../../../styles/cssVariables/cssVariables";
import { Link } from "react-router-dom";

function getStatusIcon(status: StatusType) {
  if (status === "on hold") return <PauseCircleOutlineIcon />;
  if (status === "acquired") return <CheckCircleOutlineIcon />;
  if (status === "active") return <OpenInNewIcon />;
  return undefined;
}

export function StatusChip(props: StatusChipProps) {
  if (props.status === "active") {
    const { statusDetails, status } = props;
    return (
      <Link to={statusDetails.link}>
        <StyledChip
          label={statusDetails.linkName}
          status={status}
          icon={getStatusIcon(status)}
        />
      </Link>
    );
  }

  const { status, statusDetails } = props;
  return (
    <StyledChip
      label={statusDetails.statusName}
      status={status}
      icon={getStatusIcon(status)}
    />
  );
}

const StyledChip = styled(Chip)<{ status: StatusType }>(({ status }) => ({
  borderRadius: "4px",
  color:
    status === "active"
      ? cssMainColors.royalBlue
      : status === "on hold"
      ? cssMainColors.rubyRed
      : cssMainColors.forestGreen,
  backgroundColor:
    status === "active"
      ? cssMainColors.iceBlue
      : status === "on hold"
      ? cssMainColors.softPetalPink
      : cssMainColors.freshSnow,
  padding: "0 12px",
  "& .MuiChip-label": {
    fontSize: "16px",
    fontFamily: fonts.georgia,
  },
  "& .MuiSvgIcon-root": {
    color:
      status === "active"
        ? cssMainColors.royalBlue
        : status === "on hold"
        ? cssMainColors.rubyRed
        : cssMainColors.forestGreen,
    fontSize: "18px",
  },
}));
