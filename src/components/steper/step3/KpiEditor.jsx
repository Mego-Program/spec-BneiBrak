import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function CustomDropdown({ setKpiList, kpiList, id }) {
    const index = kpiList.findIndex((item) => item._id === id);
    const kpi = kpiList[index];

    const handleChange = (event) => {
        const list = kpiList.filter((item) => item._id !== id);
        kpi.option = event.target.value;
        list.splice(index, 0, kpi);
        setKpiList(list);
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
                    Select-Option
                </InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={kpi.option}
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

export function InputTextLine({ kpiList, setKpiList, id }) {
    const inputProps = {
        style: { color: "white" },
    };
    const index = kpiList.findIndex((item) => item._id === id);
    const kpi = kpiList[index];

    const handleTextChange = (event) => {
        const list = kpiList.filter((item) => item._id !== id);
        kpi.description = event.target.value;
        list.splice(index, 0, kpi);
        setKpiList(list);
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
                value={kpi.description}
                onChange={handleTextChange}
            />
        </Box>
    );
}

export function CustomPeriod({ kpiList, setKpiList, id }) {
    const index = kpiList.findIndex((item) => item._id === id);
    const kpi = kpiList[index];

    const handleChange = (event) => {
        const list = kpiList.filter((item) => item._id !== id);
        kpi.period = event.target.value;
        list.splice(index, 0, kpi);
        setKpiList(list);
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
                    value={kpi.period}
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

export function CustomNumberField({ kpiList, setKpiList, id }) {
    const index = kpiList.findIndex((item) => item._id === id);
    const kpi = kpiList[index];

    const handleInputChange = (event) => {
        const list = kpiList.filter((item) => item._id !== id);
        kpi.days = event.target.value;
        list.splice(index, 0, kpi);
        setKpiList(list);
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
                    value: kpi.days,
                    onChange: handleInputChange,
                }}
            />
        </Box>
    );
}
