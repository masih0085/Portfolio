import { RecentWorkProps } from "../pages/home/types";
import {
  burkettandco,
  chronicled,
  coupal,
  glcsolutions,
  wedlerengineering,
  wfdesignbuild,
} from "../assets/images/index";

type RecentWork = RecentWorkProps[]

export const recentWorkData: RecentWork = [
  {
    image: wfdesignbuild,
    overLayTitle:
      "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    alt: "wfdesignbuild",
    hrefLink: "#",
  },
  {
    image: burkettandco,
    overLayTitle:
      "Accounting and tax services characterized by quality, reliability and trust.",
    alt: "burkettandco",
    hrefLink: "#",
  },
  {
    image: chronicled,
    overLayTitle:
      "Blockchain pioneers bringing transparency, trust, and security to supply.",
    alt: "chronicled",
    hrefLink: "#",
  },
  {
    image: glcsolutions,
    overLayTitle:
      "Business savvy tech experts helping forward thinking companies get things done.",
    alt: "glcsolutions",
    hrefLink: "#",
  },
  {
    image: coupal,
    overLayTitle:
      "Business savvy tech experts helping forward thinking companies get things done.",
    alt: "coupal",
    hrefLink: "#",
  },
  {
    image: wedlerengineering,
    overLayTitle:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
    alt: "wedlerengineering",
    hrefLink: "#",
  },
];
