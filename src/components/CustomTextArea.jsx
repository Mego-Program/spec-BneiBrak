import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SpecList from "./specList";

const CustomTextArea = ({ teamSpecs, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const handleButtonClick = () => {
    // Handle the button click event here
    console.log("Button clicked! Value:", inputValue);
  };

  return (
    <div>
      <TextareaAutosize
        //   value={value}
        //   onChange={handleChange}
        //   rows={rows}
        //   cols={cols}

        // maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: '#34344E',
          color: 'white'
        }}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Update content
      </Button>
    </div>
  );
};

export default CustomTextArea;
