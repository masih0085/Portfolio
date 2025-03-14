import { pascal, alvin } from "../assets/images";
import { FeedBackCardProps } from "../types/index";

type TestimonialsDataType = FeedBackCardProps[];

export const testimonialsData: TestimonialsDataType = [
  {
    avatar: pascal,
    title: "Pascal Tremblay",
    subTitle: "Creative Lead, Good Kind",
    description:
      "“Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.”",
  },
  {
    avatar: alvin,
    title: "Alvin Engler",
    subTitle: "CEO, West Third Enterprises, Inc.",
    description:
      "“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”",
  },
];
