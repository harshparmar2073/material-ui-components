import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <EditIcon />, name: "Edit" },
  { icon: <DeleteIcon />, name: "Delete" },
  { icon: <SettingsIcon />, name: "Settings" },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDialExample() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{ position: 'absolute', bottom: 10, right: 12 ,mt:5 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
