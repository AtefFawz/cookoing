import Button from "@mui/material/Button";
import { SvgIconComponent } from "@mui/icons-material";
interface dataType {
  content: string;
  Icon?: SvgIconComponent;
}
export default function SubButton({ content, Icon }: dataType) {
  return (
    <div className="w-fit">
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
    </div>
  );
}
