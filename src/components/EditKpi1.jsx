import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { red } from "@mui/material/colors";

export function CustomDropdown({ onSelectOption }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelectOption(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 130,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        <InputLabel id="select-label" style={{ color: "white"}}>
          Select-Option
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOption}
          onChange={handleChange}
          label="Select Option"
          style={{ color: "white" }}
          sx={{
            "& .MuiSelect-icon": { color: "white" },
          }}
        >
          <MenuItem value="within">Within</MenuItem>
          <MenuItem value="until">Until</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function InputTextLine({ onTextChange }) {
  const inputProps = {
    style: { color: "white" },
  };

  const handleTextChange = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "17ch" },
        "& .MuiInputBase-root": { borderBottom: "1px solid white" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={<span style={{ color: "white" }}>Write an assignment</span>}
        variant="standard"
        inputProps={inputProps}
        onChange={handleTextChange}
      />
    </Box>
  );
}

export function CustomPeriod({ onPeriodChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onPeriodChange(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 130,
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        <InputLabel id="select-label" style={{ color: "white" }}>
          Days/Months
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOption}
          onChange={handleChange}
          label="Select Option"
          style={{ color: "white" }}
          sx={{
            "& .MuiSelect-icon": { color: "white" },
          }}
        >
          <MenuItem value="days">Days</MenuItem>
          <MenuItem value="months">Months</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export function CustomNumberField({ onNumberChange }) {
  const [numberValue, setNumberValue] = useState("");

  const handleInputChange = (event) => {
    setNumberValue(event.target.value);
    onNumberChange(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "17ch" },
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="number-selector"
        placeholder="Type a number…"
        label={<span style={{ color: "white" }}></span>}
        variant="outlined"
        type="number"
        InputLabelProps={{ shrink: true, style: { color: "white" } }}
        InputProps={{
          style: { color: "white" },
          value: numberValue,
          onChange: handleInputChange,
        }}
      />
    </Box>
  );
}
