import aboutImgUrl from "../../images/section-about.svg";
import discoverImgUrl from "../../images/section-discover.svg";
import signupImgUrl from "../../images/section-signup.svg";

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

export const discoverSection = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  imgStart: true,
  dark: false,
  darkText: true,
  primary: false,
  topLine: "Unlimited Access",
  headline: "Access your account at any place, at any time",
  description:
    "No matter where are you located, we have you covered. All you need is an internet connection and a phone or computer",
  buttonLabel: "Learn more",
  img: discoverImgUrl,
  alt: "Access",
};

export const signupSection = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  imgStart: false,
  dark: false,
  darkText: true,
  primary: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely simple",
  description:
    "Get everything ready and setup in under 10 mins. All you need to do is add your information and you're ready to go",
  buttonLabel: "Start Now",
  img: signupImgUrl,
  alt: "Transactions",
};
