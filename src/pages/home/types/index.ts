import { SxProps } from "@mui/material";
import { JSX } from "react";

export type SubtitleTextProps = {
  subtitle: string;
  text: string;
};

export type TitledListProps = {
  title: string;
  items: string[];
};

export type SkillCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  details: {
    highlightTitle: string;
    highlightDescription: string[];
  }[];
  sx?: SxProps;
};

export type RecentWorkProps = {
  image: string;
  alt: string;
  overLayTitle: string;
  hrefLink: string;
};

export type CollaborationProps = {
  images: { alt: string; image: string }[];
};

export type StatusType = "active" | "on hold" | "acquired";

export type StartupProjectProps =
  | {
      status: "active";
      image: string;
      description: string;
      statusDetails: {
        link: string;
        linkName: string;
      };
    }
  | {
      status: "on hold" | "acquired";
      image: string;
      description: string;
      statusDetails: {
        statusName: string;
      };
    };
export type StatusChipProps =
  | {
      status: "active";
      statusDetails: {
        link: string;
        linkName: string;
      };
    }
  | {
      status: "on hold" | "acquired";
      statusDetails: {
        statusName: string;
      };
    };
