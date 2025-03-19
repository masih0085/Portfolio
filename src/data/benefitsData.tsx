import { BenefitsCardProps } from "../pages/mentorship/types";
import { BezierIcon } from "../pages/mentorship/icons/BezierIcon";
import {  NetworkChartIcon} from "../pages/mentorship/icons/NetworkChartIcon";
import { RocketLaunchIcon } from "../pages/mentorship/icons/RocketLaunchIcon";
import { OpenDoorIcon } from "../pages/mentorship/icons/OpenDoorIcon";
import { SpellBookIcon } from "../pages/mentorship/icons/SpellBookIcon";

type BenefitsData = BenefitsCardProps[];

export const benefitsData: BenefitsData = [
  {
    icon: <BezierIcon />,
    title: "Tools",
    text: "I'll help you build confidence and skill in your design tools.",
  },
  {
    icon: <SpellBookIcon />,
    title: "Resources",
    text: "I'll point you towards informative content to learn from.",
  },
  {
    icon: <NetworkChartIcon />,
    title: "Networking",
    text: "I'll point you towards informative content to learn from.",
  },
  {
    icon: <OpenDoorIcon />,
    title: "Opportunity",
    text: "I'll make introductions and help you source potential work.",
  },
  {
    icon: <RocketLaunchIcon />,
    title: "Growth",
    text: "I'll uncover blind spots and accelerate your growth.",
  },
];
