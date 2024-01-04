import React from "react";
import Typography from "@mui/material/Typography";

import {InputTextLine, CustomDropdown, CustomNumberField, CustomPeriod,} from "./KpiEditor.jsx";
import AlertDialog from "./AlertDialog";


const KpiItem = ({onDelete, id, kpiList, setKpiList}) => {
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
      We will <InputTextLine kpiList={kpiList} setKpiList={setKpiList} id={id}/>
        <CustomDropdown  kpiList={kpiList} setKpiList={setKpiList} id={id}/>
        <CustomNumberField kpiList={kpiList} setKpiList={setKpiList} id={id}/>{" "}
      <CustomPeriod kpiList={kpiList} setKpiList={setKpiList} id={id}/>
      <AlertDialog onDelete={onDelete} id={id}/>
    </Typography>
  );
};

export default KpiItem;
