import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export default function CheckBoxExample() {
  return (
    <>
    <Typography variant='h2'>This is Checkbox component</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Web development" />
      <FormControlLabel required control={<Checkbox />} label="App development" />
      <FormControlLabel disabled control={<Checkbox />} label="Ai/ML" />
    </FormGroup>
    </>
  );
}
