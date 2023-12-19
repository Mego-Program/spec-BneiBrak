import React from "react";
import Button from "@mui/material/Button";

const SaveButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Save
    </Button>
  );
};

export default SaveButton;
