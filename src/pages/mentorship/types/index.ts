import { JSX } from "@emotion/react/jsx-runtime";
import { ReactNode } from "react";

export type TitledListProps = {
  title: string;
  targetAudience: string;
};

export type PricingCardProps = {
  icon: ReactNode;
  title: string;
  price: string;
  description: string;
  buttonText: string;
  details: TitledListProps;
};

export type BenefitsCardProps = {
  icon: JSX.Element;
  title: string;
  text: string;
};

export type MentorPrinciplesProps = BenefitsCardProps
