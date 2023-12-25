import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  Button,
} from '@mui/material';

const InvisibleNamesList = ({stepperData, setStepperData}) => {
  const allNames = [
    'The Scrum Master: Finny Kaminer',
    'Shlomo Vulkan',
    'Idan Hadad',
    'Oshie Fishman',
    'Pinchas Tseinwirt',
    'Shamulik Roth',
    'chat.openai'
  ];

  const [visibleNames, setVisibleNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;

    // Check if the name is not already in the visible list and is not already selected
    if (!visibleNames.includes(newName) && newName !== selectedName) {
      setVisibleNames([...visibleNames, newName]);
    }

    setSelectedName('');
  };

  const handleRemoveName = (nameToRemove) => {
    const updatedNames = visibleNames.filter((name) => name !== nameToRemove);
    setVisibleNames(updatedNames);
  };

  const handleNameClick = (clickedName) => {
    handleRemoveName(clickedName);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel style={{ color: '#fff' }}>Names for team selection</InputLabel>
            <Select
            value={selectedName}
            onChange={handleNameChange}
            
              label="Names for team selection"
              style={{ color: '#fff' }}
            >
              {allNames.map((name, index) => (
                !visibleNames.includes(name) && (
                  <MenuItem key={index} value={name}>
                    {name}
                  </MenuItem>
                )
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        teammates:
      </Typography>
      <ul>
        {visibleNames.map((name, index) => (
          <li
            key={index}
            onClick={() => handleNameClick(name)}
            style={{ cursor: 'default' }}
          >
            <span style={{ cursor: 'pointer' }}>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvisibleNamesList;
