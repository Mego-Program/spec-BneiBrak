import React from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  InputTextLine,
  CustomDropdown,
  CustomNumberField,
  CustomPeriod,
} from "./EditKpi1";
import AlertDialog from "./AlertDialog";
import { v4 as uuidv4 } from 'uuid';

const KpiItem1 = ({ id, onDelete}) => {
  return (
    <Typography
      variant="body1"
      style={{ color: "white", marginBottom: 20 }}
      sx={{
        "& > :not(style)": { mx: "auto", my: "auto" },
        display: "flex",
        flexDirection: "row",
        gap: 0.5,
        alignItems: "center",
        justifyContent: "flex-start",
        border: "2px solid white",
        borderRadius: 6,
        padding: 2,
      }}
    >
      {/* Render each KPI item row */}
      We will <InputTextLine /> <CustomDropdown  /> <CustomNumberField />{" "}
      <CustomPeriod />
      <AlertDialog onDelete={onDelete} id={id}/>
      {/* Include the SaveButton component */}
      
    </Typography>
  );
};

export default KpiItem1;
