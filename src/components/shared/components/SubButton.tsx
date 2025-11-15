"use client";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { SvgIconComponent } from "@mui/icons-material";

interface dataType {
  content: string;
  Icon?: SvgIconComponent;
}
export default function SubButton({ content, Icon }: dataType) {
  return (
    <motion.div
      whileTap={{ boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)" }}
      className="w-fit rounded-full"
    >
      {" "}
      <Button
        sx={{
          borderRadius: "9999px",
          backgroundColor: "#F9F9F9",
          color: "#121212",
          textWrap: "nowrap",
          fontSize: "11px ",
          letterSpacing: "0px",
          fontWeight: "600",
          padding: "5px 8px",
          width: "full",
        }}
        variant="outlined"
      >
        <span className="flex justify-between items-center gap-1">
          {Icon && <Icon fontSize="small" />}
          {content}
        </span>
      </Button>
    </motion.div>
  );
}
