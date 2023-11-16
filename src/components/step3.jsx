import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, color: '#F6C927', backgroundColor: '#21213E' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: '#F6C927' }}>
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ '& .MuiSelect-icon': { color: '#F6C927' }, '&:before': { borderBottomColor: '#F6C927' } }}
        >
          <MenuItem value={10} sx={{ color: '#F6C927' }}>
            Ten
          </MenuItem>
          <MenuItem value={20} sx={{ color: '#F6C927' }}>
            Twenty
          </MenuItem>
          <MenuItem value={30} sx={{ color: '#F6C927' }}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
