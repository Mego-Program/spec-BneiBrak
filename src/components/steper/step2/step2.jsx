import React, { useState, useEffect } from 'react';
import {FormControl, InputLabel, Select, MenuItem, Typography, Grid,} from '@mui/material';
import axios from 'axios';

const InvisibleNamesList = ({stepperData, setStepperData}) => {
    const [allNames, setAllNames] = useState(null);
    const [remainNames, setRemainNames] = useState([]);
    const [rendering, setRendering] = useState(true);

    const fetchNames = async () => {
        const token = localStorage.getItem("authToken");
        // console.log('token:', token)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/infraImport/allUsers`,
                {headers: {'Authorization': token, 'Content-Type': 'application/json; charset=utf-8',}})
            setRemainNames(response.data.data.result);
            const userNames = response.data.data.result
            const userNamesObj = {}
            userNames.forEach(user => userNamesObj[user._id] = user.firstName  + ' ' + user.lastName)
            // console.log('Object:', userNamesObj, '\n', 'ListUserNames:', userNames)
            setAllNames({'object':userNamesObj, 'List': userNames});
        } catch (error) {console.error('Error fetching names:', error)}
    };


    useEffect(() => {
        if (rendering) {
            if (!allNames)
                fetchNames();
            else
                setRendering(false);
    }}, [rendering]);


    const handleAddName = (event) => {
        const newParticipants =  {participants: [...stepperData.participants, event.target.value]}
        setStepperData({...stepperData, ...newParticipants});
        setRemainNames(allNames.List.filter(user => !stepperData.participants.includes(user._id)));
        setRendering(true);
    };

    const handleRemoveName = (userToRemove) => {
        const updatedNames = stepperData.participants.filter(user => user !== userToRemove);
        setStepperData({ ...stepperData, participants: updatedNames});
        setRemainNames(allNames.List.filter(user => !stepperData.participants.includes(user._id)));
        setRendering(true);
    };


  return (
      <div style={{display: 'flex'}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel style={{ color: '#fff' }}>Names for team selection</InputLabel>
              <Select
                  value={remainNames}
                  onChange={handleAddName}
                  label="Names for team selection"
                  style={{ backgroundColor: '#21213E', color: '#fff', borderRadius: '7px' }}
              >
                {remainNames.map((user, index) => (
                        <MenuItem key={index} value={user._id} >
                            {allNames.object[user._id]}
                        </MenuItem>)
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <div style={{ marginTop: '20px', marginLeft: '-40%'}}>
            <Typography variant="h6" > Teammates: </Typography>

            {allNames && <ul>
              {stepperData.participants.map((userId, index) => (
                  <li key={index}
                      onClick={() => handleRemoveName(userId)}
                      style={{ cursor: 'pointer' }}
                  >
                      {allNames.object[userId]}
                  </li>
              ))}
            </ul>}
        </div>

      </div>
  );
};

export default InvisibleNamesList;
