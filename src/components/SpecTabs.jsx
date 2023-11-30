import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import ContentEditorComponent from './ContentEditorComponent';

const SpecTabs = ({ teamSpecs, onUpdate }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Spec Details" />
        <Tab label="KPI Items" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        {/* ContentEditorComponent within "Spec Details" tab */}
        <ContentEditorComponent teamSpecs={teamSpecs} onChange={onUpdate} />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        {/* Content for "KPI Items" tab */}
        <Typography variant="h6">KPI Items Content Goes Here</Typography>
        {/* Add KPI Items related content */}
      </TabPanel>
    </div>
  );
};

// A helper function to create a tab panel
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default SpecTabs;

