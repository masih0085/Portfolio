import { ReactNode } from "react";

export type HeroBodyProps = {
  title:string
  text:string
}

export type CallOutProps = {
  title: string;
  description: string;
  icon: ReactNode;
  buttonName: string;
  link: string;
};

export type FeedBackCardProps = {
  avatar: string;
  description: string;
  title: string;
  subTitle: string;
};

export type FeedbackSliderProps = {
  items: FeedBackCardProps[];
};

export type CallToActionProps = {
  title: string;
  description: string;
  textButton: string;
  icon:ReactNode
};
