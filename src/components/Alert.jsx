import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';

export default function AlertExample() {
  return (
    <>
    <Typography>This is Alert Component</Typography> 
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        You have Successfully Completed this Assessment
    </Alert>
    </>
  );
}
