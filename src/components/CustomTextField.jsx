import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const CustomTextField = () => {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState('Title');

  useEffect(() => {
    // Make an API call to get the data
    axios.get("http://localhost:3000/spec/{Spec._id}")
      .then(response => {
        // Check if response data has a title property
        if (response.data && response.data.title) {
          setTitle(response.data.title);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

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
        label={`Enter Text for "${title}"`}
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleChange}
        margin="normal"
        InputProps={{
          style: {
            backgroundColor: "white",
          },
        }}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Update Title
      </Button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CustomTextField;
