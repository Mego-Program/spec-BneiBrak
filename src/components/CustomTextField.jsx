import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CustomTextField = ({ teamSpecs }) => {
  const [inputValue, setInputValue] = useState('');

  // Extract title from the first spec in teamSpecs, provide a default if the array is empty
//   const title = teamSpecs.title > 0 ? teamSpecs[0].title : 'Default Title';

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle the button click event here
    console.log("Button clicked! Value:", inputValue);
  };

  return (
    <div>
      <TextField
        // label={`Enter Text for "${title}"`}
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleChange}
        margin="normal"
        InputProps={{
            style: {
              backgroundColor: 'white',
            },
          }}
    
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
      Update Title
      </Button>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default CustomTextField;
