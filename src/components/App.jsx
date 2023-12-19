import React from "react";
import SpecList from "./specList";
import { Container } from "@mui/material";
import SpecTabs from "./SpecTabs";
import {
  CustomDropdown,
  InputTextLine,
  CustomPeriod,
  CustomNumberField,
} from "./EditKpi";
import AlertDialog from "./AlertDialog";
import HorizontalNonLinearStepper from "./stepper";
import CreateKpi from "./CreateKpi";
import KpiComponent from "./KpiComponent";

function App() {
  return (
    <Container>
      <br />
      {/* <SpecList /> */}
      <SpecTabs />
      {/* <CreateKpi/> */}
      {/* <KpiComponent/> */}
      {/* {<CustomDropdown />} */}
      {/* {<AlertDialog/>} */}
      {/* {<HorizontalNonLinearStepper/>} */}
    </Container>
  );
}

export default App;
