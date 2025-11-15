import { Variants } from "framer-motion";

export const parentAnimate: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const childAnimateLeft: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const childAnimateRight: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const childAnimateBottom: Variants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "linear" },
  },
};
