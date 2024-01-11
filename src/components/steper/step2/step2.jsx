import React, { useState, useEffect } from 'react';
import {FormControl, InputLabel, Select, MenuItem, Typography, Grid,} from '@mui/material';
import axios from 'axios';

const InvisibleNamesList = ({stepperData, setStepperData}) => {
    const [allNames, setAllNames] = useState([]);
    const [remainNames, setRemainNames] = useState([]);
    const [rendering, setRendering] = useState(true);

    const fetchNames = async () => {
        const token = localStorage.getItem("authToken");
        // console.log('token:', token)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/infraImport/allUsers`,
                {headers: {'authorization': token, 'Content-Type': 'application/json; charset=utf-8',}})
            setRemainNames(response.data.data.result);
            setAllNames(response.data.data.result);
        } catch (error) {console.error('Error fetching names:', error)}
    };

    // const fetchNames = async () => {
    //     const token = localStorage.getItem("authToken");
    //     try {
    //         const response = await axios.get(`http://localhost:5000/api/users/users`,
    //             {headers: {'authorization': token, 'Content-Type': 'application/json; charset=utf-8',}});
    //         setRemainNames(response.data.result);
    //         setAllNames(response.data.result);
    //     } catch (error) {
    //         console.error('Error fetching names:', error);
    //     }
    // };


    useEffect(() => {if (rendering) {
        if (!allNames.length) fetchNames();
        setRemainNames(allNames.filter(user => !stepperData.participants.includes(user)));
          setRendering(false);}
    }, [rendering]);


    const handleSelectName = (event) => {
        const userToAdd = remainNames.find(user => user._id === event.target.value);
        const newParticipants =  {participants: [...stepperData.participants, userToAdd]}
        setStepperData({...stepperData, ...newParticipants});
        setRendering(true);
    };

    const handleRemoveName = (userToRemove) => {
        const updatedNames = stepperData.participants.filter(user => user._id !== userToRemove._id);
        setStepperData({ ...stepperData, participants: updatedNames});
        setRendering(true);
    };


  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel style={{ color: '#fff' }}>Names for team selection</InputLabel>
              <Select
                  value={remainNames}
                  onChange={handleSelectName}
                  label="Names for team selection"
                  style={{ color: '#fff' }}
              >
                {remainNames.map((user, index) => (
                        <MenuItem key={index} value={user._id} >
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
          {stepperData.participants.map((user, index) => (
              <li
                  key={index}
                  onClick={() => handleRemoveName(user)}
                  style={{ cursor: 'pointer' }}
              >
                {user.firstName  + ' ' + user.lastName}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default InvisibleNamesList;
