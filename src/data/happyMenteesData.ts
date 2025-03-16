import { FeedBackCardProps } from "../types";
import {
  arnold,
  jenann,
  jonathan,
  dalrae,
  erika,
} from "../assets/images/index";

type HappyMenteesDataType = FeedBackCardProps[];

export const happyMenteesData: HappyMenteesDataType = [
  {
    avatar: dalrae,
    description:
      "Amin always offered insightful suggestions on the work I produced and challenged me with questions I had not considered. He is an incredible mentor, designer, and person.”",
    title: "Dalrae Kim",
    subTitle: "UX Designer, Indeed",
  },
  {
    avatar: jenann,
    description:
      "Amin’s passion for design and unique perspective constantly pushed my problem-solving abilities. He's a master of his craft, and genuinely cares about the people he mentors.”",
    title: "Jenann Pham",
    subTitle: "Design Consultant, Freelance",
  },
  {
    avatar: jonathan,
    description:
      "Amin not only opened doors for me in my career, but did so with a smile and an easy-going personality. He has serious grit, and if you spend enough time with him, you will too”",
    title: "Jonathan Maimon",
    subTitle: "User Researcher, Coinbase",
  },
  {
    avatar: erika,
    description:
      "Amin believed in me before I believed in myself as a designer, and I am ever grateful for his unwavering support in my growth and development as a freelancer and design educator.”",
    title: "Erika Harano",
    subTitle: "UX Designer, Freelance",
  },
  {
    avatar: arnold,
    description:
      "Amin greatly impacted my growth as a designer. He took the time to really understand where I was at in my career and provided guidance to help fill gaps in my knowledge.”",
    title: "Arnold Rosario",
    subTitle: "UX Designer, Smartsheet",
  },
];
