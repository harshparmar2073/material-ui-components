import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Settings } from '@mui/icons-material';
export default function TabExample() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home"  icon={<HomeIcon/>}/>
        <Tab value="two" label="Account" icon={<AccountCircleIcon/>}/>
        <Tab value="three" label="Settings" icon={<Settings/>} />
      </Tabs>
    </Box>
  );
}
