import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CustomTextArea = ({ value, onChange, rows = 4, cols = 50 }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextareaAutosize
      //   value={value}
      //   onChange={handleChange}
      //   rows={rows}
      //   cols={cols}
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
    />
  );
};

export default CustomTextArea;
