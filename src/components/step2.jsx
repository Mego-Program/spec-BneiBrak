import React, { useState, useEffect } from 'react';
import {FormControl, InputLabel, Select, MenuItem, Typography, Grid,} from '@mui/material';
import axios from 'axios';

const InvisibleNamesList = ({stepperData, setStepperData}) => {
  const [allNames, setAllNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
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
  }, []); 

  const handleNameChange = (event) => {
    const userToAdd = event.target.value;
    if (!stepperData.participants.includes(userToAdd) && userToAdd !== selectedName) {
      const newParticipants =  {participants: [...stepperData.participants, userToAdd]}
      setStepperData({...stepperData, ...newParticipants});
    }

    setSelectedName(stepperData.participants);
  };

  const handleRemoveName = (nameToRemove) => {
    const updatedNames = stepperData.participants.filter((name) => name !== nameToRemove);
    setStepperData({ ...stepperData, participants: updatedNames });
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
                    !stepperData.participants.includes(user.firstName) && (
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
          {stepperData.participants.map((name, index) => (
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
