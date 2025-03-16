import { BoxIcon } from "../pages/mentorship/icons/BoxIcon";
import { DumpsterFireIcon } from "../pages/mentorship/icons/DumpsterFireIcon";
import { FingerprintIcon } from "../pages/mentorship/icons/FingerprintIcon";
import { JusticeIcon } from "../pages/mentorship/icons/JusticeIcon";
import { MentorPrinciplesProps } from "../pages/mentorship/types";

type MentorPrinciplesType = MentorPrinciplesProps[];

export const MentorPrinciplesData: MentorPrinciplesType = [
  {
    icon: <FingerprintIcon />,
    title: "Authenticity",
    text: "No sugar-coated critiques here. I care about your growth too much to not keep it real. We'll tear things down and rebuild them better, together.",
  },
  {
    icon: <DumpsterFireIcon />,
    title: "Humility",
    text: "I don’t profess to be at the top of the design talent pool, because I know there is still much for me to master. Design is a moving target I'm hunting every day.",
  },
  {
    icon: <JusticeIcon />,
    title: "Equality",
    text: "To me, you're more than just a mentee. You’re a designer — an industry peer. I’m not the only one teaching and you’re not the only one learning.",
  },
  {
    icon: <BoxIcon />,
    title: "Transparency",
    text: "I don’t have all the answers, but I’m happy to point you towards useful resources and share what I've learned from my own personal design journey.",
  },
];
