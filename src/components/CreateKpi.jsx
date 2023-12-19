import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  InputTextLine,
  CustomDropdown,
  CustomNumberField,
  CustomPeriod,
} from "./EditKpi";
import AlertDialog from "./AlertDialog";
import KpiComponent from "./KpiComponent";
import KpiItem from "./KpiItem";

const CreateKpi = () => {
  const [kpiItems, setKpiItems] = useState([]);

  const addKpiItem = () => {
    setKpiItems([...kpiItems, {}]); // Add a new empty KPI item to the list
  };

  const deleteKpiItem = (index) => {
    const updatedKpiItems = [...kpiItems];
    updatedKpiItems.splice(index, 1);
    setKpiItems(updatedKpiItems);
  };

  const saveKpiItems = () => {
    // Add logic to save kpiItems to your data store or perform other actions
    console.log("Saving KPI items:", kpiItems);
  };

  return (
    <div>
      <h1 style={{ color: "white", marginBottom: 20 }}>KPIs</h1>
      {/* <KpiComponent /> */}

      {kpiItems.map((item, index) => (
        <Typography>
         
          {/* Render each KPI item row */}
          
       
          <KpiItem
          key={index}
          index={index}
          onDelete={() => deleteKpiItem(index)}
          onSave={saveKpiItems}
        />
        </Typography>
      ))}

      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
        <IconButton color="primary" onClick={addKpiItem}>
          <AddIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default CreateKpi;
