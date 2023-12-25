import {
  InputTextLine,
  CustomDropdown,
  CustomNumberField,
  CustomPeriod,
} from "./EditKpi";
import Typography from "@mui/material/Typography";
import AlertDialog from "./AlertDialog";
import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateKpi from "./CreateKpi";


export default function KpiComponent({ index, onDelete }) {
    
  return (
    <div>
      <Typography
        variant="h6"
        style={{ color: "white", marginBottom: 20 }}
        sx={{
            "& > :not(style)": { mx: "auto", my: "auto" },
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
            border: "2px solid white",
            borderRadius: 8,
            padding: 2,
          }}
      >
        We will <InputTextLine /> <CustomDropdown /> <CustomNumberField />{" "}
        <CustomPeriod /> <AlertDialog index={index} onDelete={() => deleteKpiItem(index)} />
      </Typography>
    
    </div>
  );
}
