import { PricingCardProps } from "../pages/mentorship/types";
import { D12Icon } from "../pages/mentorship/icons/D12Icon";
import { D20Icon } from "../pages/mentorship/icons/D20Icon ";
import { PyramidIcon } from "../pages/mentorship/icons/PyramidIcon";

type PricingData = PricingCardProps[];

export const pricingData: PricingData = [
  {
    icon: <PyramidIcon />,
    buttonText: "Book a session",
    description:
      "1 hour of candid conversation and advice as needed with no long term, ongoing commitment required.",
    details: {
      targetAudience: "All designers",
      title: "Good for:",
    },
    price: "$150",
    title: "Spot Mentoring",
  },
  {
    icon: <D12Icon />,
    buttonText: "Improve your chops",
    description:
      "4 hours of targeted feedback and design critique to help you focus on delivering your best work.",
    details: {
      targetAudience: "Experienced designers",
      title: "Great for:",
    },
    price: "$500",
    title: "Production Support",
  },
  {
    icon: <D20Icon />,
    buttonText: "Book a session",
    description:
      "12 hours of professional coaching and collaboration to help you achieve long term goals and ambitions.",
    details: {
      targetAudience: "New designers",
      title: "Best for:",
    },
    price: "$1,200",
    title: "Tailored Learning",
  },
];
