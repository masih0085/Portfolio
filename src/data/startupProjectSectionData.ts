import { StartupProjectProps } from "../pages/home/types";
import {
  baselair,
  bootstraplogos,
  automalog,
  shipable,
  houston,
  basin,
  kybercore,
  dovetail,
  userforge,
} from "../assets/images/index";

type StartupProjectSectionType = StartupProjectProps;

export const startupProjectSectionData: StartupProjectSectionType[] = [
  {
    description:
      "Affordable, human-crafted logos for startups and indie projects.",
    status: "active",
    image: bootstraplogos,
    statusDetails: {
      link: "https://bootstraplogos.com",
      linkName: "bootstraplogos.com",
    },
  },
  {
    description:
      "Community platform for miniature painters to learn, connect, and showcase work.",
    statusDetails: {
      link: "https://thebaselair.com",
      linkName: "thebaselair.com",
    },
    status: "active",
    image: baselair,
  },
  {
    description:
      "AI-driven changelog that turns git commits into release notes, instantly.",
    statusDetails: {
      link: "https://automalog.com",
      linkName: "automalog.com",
    },
    status: "active",
    image: automalog,
  },
  {
    description:
      "Short, focused design and growth collabs for startup tech founders.",
    status: "on hold",
    statusDetails: {
      statusName: "on hold",
    },
    image: shipable,
  },
  {
    description:
      "Simple feedback and engagement tools that help teams ship winning products.",
    status: "on hold",
    statusDetails: {
      statusName: "on hold",
    },
    image: houston,
  },
  {
    description:
      "Next level plug and play chassis systems for custom DIY lightsaber builds.",
    status: "on hold",
    statusDetails: {
      statusName: "on hold",
    },
    image: kybercore,
  },
  {
    description:
      "A powerful, easy-to-configure form backend for designers and developers.",
    status: "acquired",
    statusDetails: {
      statusName: "exited in 2024",
    },
    image: basin,
  },
  {
    description:
      "A space and member management solution for coworking communities.",
    status: "acquired",
    statusDetails: {
      statusName: "exited in 2017",
    },
    image: dovetail,
  },
  {
    description:
      "A collaborative tool for creating simple, effective user personas.",
    status: "acquired",
    statusDetails: {
      statusName: "exited in 2016",
    },
    image: userforge,
  },
];
