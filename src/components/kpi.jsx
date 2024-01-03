import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import KpiItem1 from "./KpiItem1";
import { v4 as uuidv4 } from 'uuid';

const CreateKpi1 = () => {
  const [kpiItems, setKpiItems] = useState([]);

  const addKpiItem = () => {
    const newKpiItem = { id: uuidv4() };
    setKpiItems([...kpiItems, newKpiItem]); // Add a new empty KPI item to the list
  };

  const deleteKpiItem = (id) => {
    const updatedKpiItems = kpiItems.filter(item => item.id !== id);
    setKpiItems(updatedKpiItems);
  };

  const saveKpiItems = () => {
    // Add logic to save kpiItems to your data store or perform other actions
    console.log("Saving KPI items:", kpiItems);
  };

  return (
    <div>
      {kpiItems.map((item, index) => (
        <Typography key={item.id}>
          
       
          <KpiItem1
          key={item.id}
          index={item.id}
          onDelete={(index) => deleteKpiItem(item.id)}
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

export default CreateKpi1;
