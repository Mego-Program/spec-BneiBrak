import React from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveButton from "./SaveButton";
import {
  InputTextLine,
  CustomDropdown,
  CustomNumberField,
  CustomPeriod,
} from "./EditKpi";
import AlertDialog from "./AlertDialog";

const KpiItem = ({ index, onDelete, onSave, deleteKpiItem }) => {
  return (
    <Typography
      variant="body1"
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
      {/* Render each KPI item row */}
      We will <InputTextLine /> <CustomDropdown /> <CustomNumberField />{" "}
      <CustomPeriod />
      <SaveButton onClick={onSave} />
      <AlertDialog onDelete={onDelete} deleteFunction={onDelete} />
      {/* Include the SaveButton component */}
      
    </Typography>
  );
};

export default KpiItem;
