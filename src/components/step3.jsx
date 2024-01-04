import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import KpiItem from "./KpiItem.jsx";
import axios from "axios";
import {render} from "react-dom";

const CreateKpi = ({ stepperData, setStepperData }) => {
    const [kpiList, setKpiList] = useState(stepperData.kpis);

    const addKpiItem = () => {
        setKpiList([...kpiList, {_id: `${Date.now()}`, description:'', status: 'Todo', option: 'with in', days: 0}]);
    }

    const deleteKpiItem = (id) => {
    const updatedKpiItems = kpiList.filter(item => item._id !== id);
      setKpiList(updatedKpiItems);
  };

    useEffect(() => {
        setStepperData({ ...stepperData, kpis: kpiList });
    }, [kpiList]);


  return (
    <div>
      {kpiList.map( (item, index) => (
        <Typography key={index}>
          <KpiItem
          key={index}
          id={item._id}
          onDelete={() => deleteKpiItem(item._id)}
          kpiList={kpiList}
          setKpiList={setKpiList}
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
