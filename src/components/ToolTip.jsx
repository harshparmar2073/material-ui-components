import * as React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

export default function ToolTipExample() {
  return (
    <>
    <Typography> This is </Typography>
    <Tooltip title="Profile">
      <IconButton>
            <AccountBoxIcon/>
      </IconButton>
    </Tooltip>
    </>
  );
}
