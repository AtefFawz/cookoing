// export default function IngredientsComponent({ data }: { data: string }) {
//   return (
//     <div>
//       <div className="flex  items-center gap-2 lg:gap-4">
//         <input type="radio" className="" />
//         <label>{data}</label>
//       </div>
//     </div>
//   );
// }
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup({ data }: { data: string }) {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid gray",
        gap: "5px",
        padding: "16px 0",
      }}
    >
      <RadioGroup>
        <FormControlLabel value={data} control={<Radio />} label={data} />
      </RadioGroup>
    </FormControl>
  );
}
