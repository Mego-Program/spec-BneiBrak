import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('within');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div >
      <Select
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value="within">Within</MenuItem>
        <MenuItem value="in">In</MenuItem>
        <MenuItem value="until">Until</MenuItem>
      </Select>
    </div>
  );
};

export default CustomDropdown;


