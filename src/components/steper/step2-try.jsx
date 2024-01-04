import React, { useState, useEffect } from 'react';
import {FormControl, InputLabel, Select, MenuItem, Typography, Grid,} from '@mui/material';
import axios from 'axios';

const InvisibleNamesList = ({stepperData, setStepperData}) => {
    const [allNames, setAllNames] = useState([]);
    const [remainNames, setRemainNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const token = localStorage.getItem("authToken");
      // console.log('token:', token)
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/infraImport/allUsers`,
            {headers: {'Authorization': token, 'Content-Type': 'application/json; charset=utf-8',}})
        setAllNames(response.data.data.result);
        setRemainNames(allNames.filter(user => !stepperData.participants.includes(user._id)).map(user => user.firstName  + ' ' + user.lastName));
      } catch (error) {console.error('Error fetching names:', error)}
    };
    fetchNames();
  }, []);

  const handleNameChange = (event) => {
    const userToAdd = event.target.value;
    let user = remainNames.find(user => user.firstName  + ' ' + user.lastName === userToAdd)
    setRemainNames(remainNames.filter(user => user.firstName  + ' ' + user.lastName !== userToAdd));
    const newParticipants =  {participants: [...stepperData.participants, user._id]}
    setStepperData({...stepperData, ...newParticipants});
  };

  const handleRemoveName = (id) => {
    const updatedNames = stepperData.participants.filter(userId => userId !== id);
    setStepperData({ ...stepperData, participants: updatedNames});
  };

  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel style={{ color: '#fff' }}>Names for team selection</InputLabel>
              <Select
                  value={stepperData.participants}
                  onChange={handleNameChange}
                  label="Names for team selection"
                  style={{ color: '#fff' }}
              >
                {remainNames.map((user, index) => (
                        <MenuItem key={index} value={user.firstName  + ' ' + user.lastName} >
                          {user.firstName  + ' ' + user.lastName}
                        </MenuItem>)
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Teammates:
        </Typography>
        <ul>
          {stepperData.participants.map((id, index) => (
              <li
                  key={index}
                  onClick={() => handleRemoveName(id)}
                  style={{ cursor: 'pointer' }}
              >
                {allNames.find(user => user._id === id).firstName  + ' ' + allNames.find(user => user._id === id).lastName}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default InvisibleNamesList;
