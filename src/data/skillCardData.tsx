import { BookIcon } from "../pages/home/icons/BookIcon";
import { LayerPlusIcon } from "../pages/home/icons/LayerPlusIcon";
import { TerminalIcon } from "../pages/home/icons/TerminalIcon";
import { SkillCardProps } from "../pages/home/types";

type SkillCardData = Omit<SkillCardProps, "sx">;

export const skillCardData: SkillCardData[] = [
  {
    icon: <LayerPlusIcon />,
    title: "Designer",
    description:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
    details: [
      {
        highlightTitle: "Things I enjoy designing:",
        highlightDescription: ["UX, UI, Web, Apps, Logos"],
      },
      {
        highlightTitle: "Design Tools:",
        highlightDescription: [
          "Affinity",
          "Designer",
          "Figma",
          "Pen & Paper",
          "Sketch",
        ],
      },
    ],
  },
  {
    icon: <TerminalIcon />,
    title: "Frontend Developer",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    details: [
      {
        highlightTitle: "Languages I speak:",
        highlightDescription: ["HTML, Pug, Slim, CSS, Sass, Git"],
      },
      {
        highlightTitle: "Dev Tools:",
        highlightDescription: [
          "Astro JS",
          "Bitbucket",
          "Bootstrap",
          "Bulma",
          "Codekit",
          "Github",
          "Netlify",
          "Tailwind CSS",
          "VS Code",
        ],
      },
    ],
  },
  {
    icon: <BookIcon />,
    title: "Mentor",
    description:
      "I genuinely care about people, and enjoy helping them work on their craft.",
    details: [
      {
        highlightTitle: "Experiences I draw from:",
        highlightDescription: ["UX/UI, Product design, Freelancing"],
      },
      {
        highlightTitle: "Mentor Stats:",
        highlightDescription: [
          "9+ years experience",
          "30+ short courses",
          "65+ bootcamps",
          "250+ students",
          "2,500+ mentor sessions",
          "60+ group critiques",
          "18,000+ bits of feedback",
        ],
      },
    ],
  },
];
