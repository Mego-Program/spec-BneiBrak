import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';

const RocketKPIForm = () => {
  const [lines, setLines] = useState([
    { task: '', option: 'within', days: '' },
  ]);

  const handleAddLine = () => {
    setLines([...lines, { task: '', option: 'within', days: '' }]);
  };

  const handleRemoveLine = (index) => {
    const updatedLines = [...lines];
    updatedLines.splice(index, 1);
    setLines(updatedLines);
  };

  const handleInputChange = (index, field, value) => {
    const updatedLines = [...lines];
    updatedLines[index][field] = value;
    setLines(updatedLines);
  };

  return (
    <div>
      {lines.map((line, index) => (
        <Grid container spacing={2} key={index} style={{ marginBottom: '10px' }}>
          <Grid item xs={3}>
            <TextField
              label="We will"
              value={line.task}
              onChange={(e) => handleInputChange(index, 'task', e.target.value)}
              style={{ color: '#fff', borderColor: '#F6C927' }}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <InputLabel style={{ color: '#fff' }}>Option</InputLabel>
              <Select
                value={line.option}
                onChange={(e) => handleInputChange(index, 'option', e.target.value)}
                style={{ color: '#fff' }}
              >
                <MenuItem value="within">Within</MenuItem>
                <MenuItem value="until">Until</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {line.option === 'within' && (
            <Grid item xs={3}>
              <TextField
                label="Number of days"
                type="number"
                value={line.days}
                onChange={(e) => handleInputChange(index, 'days', e.target.value)}
                style={{ color: '#fff' }}
              />
            </Grid>
          )}
          {line.option === 'until' && (
            <Grid item xs={3}>
              <TextField
                label="Select date"
                type="date"
                InputLabelProps={{ shrink: true }}
                // Add onChange handler for date input
                style={{ color: '#fff' }}
              />
            </Grid>
          )}
          {index > 0 && (
            <Button
                 size="small"
              variant="outlined"
              onClick={() => handleRemoveLine(index)}
              style={{ color: '#fff', borderColor: '#F6C927', marginLeft: '10px' }}
            >
              -
            </Button>
          )}
        </Grid>
      ))}
      <Button
        variant="outlined"
        onClick={handleAddLine}
        style={{ color: '#fff', borderColor: '#F6C927', marginBottom: '10px' }}
      >
        +
      </Button>
    </div>
  );
};

export default RocketKPIForm;
