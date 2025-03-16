import {
  facebook,
  yelp,
  indeed,
  netflix,
  clover,
  thumbtack,
  microsoft,
  sony,
} from "../assets/images/index";

type MenteeSuccessDataType = { image: string; alt: string }[];

export const menteeSuccessData: MenteeSuccessDataType = [
  { image: facebook, alt: "facebook" },
  { image: netflix, alt: "netflix" },
  { image: sony, alt: "sony" },
  { image: microsoft, alt: "microsoft" },
  { image: thumbtack, alt: "thumbtack" },
  { image: clover, alt: "clover" },
  { image: indeed, alt: "indeed" },
  { image: yelp, alt: "yelp" },
];
