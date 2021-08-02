import aboutImgUrl from "../../images/section-about.svg";

export interface SectionInterface {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  imgStart: boolean;
  dark: boolean;
  darkText: boolean;
  primary: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  img: string;
  alt: string;
}

export const aboutSection = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  imgStart: false,
  dark: true,
  darkText: false,
  primary: true,
  topLine: "Premium Services",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows unlimited transactions without getting charged",
  buttonLabel: "Get started",
  img: aboutImgUrl,
  alt: "Transactions",
};
