"use client";
import { motion } from "framer-motion";
import { SvgIconComponent } from "@mui/icons-material";
interface dataType {
  content: string;
  Icon?: SvgIconComponent;
}
export default function Btn({ content, Icon }: dataType) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
      className="text-[#FFFFFF] font-bold text-[12px] lg:py-5 lg:px-8 px-3 py-3 bg-[#000000] rounded-xl flex gap-2 items-center justify-center  text-nowrap h-fit"
    >
      {content}
      {Icon && <Icon fontSize="small" />}
    </motion.button>
  );
}
