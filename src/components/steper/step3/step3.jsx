import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import KpiItem from "./KpiItem.jsx";

const CreateKpi = ({ stepperData, setStepperData }) => {
    const [kpiList, setKpiList] = useState(stepperData.kpis);

    const addKpiItem = async () => {
        setKpiList([...kpiList,
            {_id: `${Date.now()}`, description:'', status: 'Todo', option: '', days: 0, period: 'Days'}]);
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
