// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from '@mui/material';
import axios from 'axios';

const InvisibleNamesList = () => {
  const [allNames, setAllNames] = useState([]);
  const [visibleNames, setVisibleNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');


  useEffect(() => {
    // Fetch names from the backend API
    const fetchNames = async () => {
      const token = localStorage.getItem("authToken");
      console.log('token:', token)
      try {
        const response = await axios.get('http://localhost:3000/controller_functions/infraImport/infra',
            {headers: {'Authorization': token, 'Content-Type': 'application/json; charset=utf-8',}})
        setAllNames(response.data.data.result);
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };

    fetchNames();
  }, []); // Empty dependency array to ensure the effect runs only once

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
                {allNames.map((user, index) => (
                    !visibleNames.includes(user.firstName) && (
                        <MenuItem key={index} value={user.firstName  + ' ' + user.lastName}>
                          {user.firstName  + ' ' + user.lastName}
                        </MenuItem>
                    )
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Teammates:
        </Typography>
        <ul>
          {visibleNames.map((name, index) => (
              <li
                  key={index}
                  onClick={() => handleNameClick(name)}
                  style={{ cursor: 'pointer' }}
              >
                {name}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default InvisibleNamesList;
