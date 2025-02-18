import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';

export default function TextFieldExample() {
  const { name } = useParams(); 

  return (
    <div>
      <Typography variant="h4" mb={2}>This is TextField</Typography>

      <TextField fullWidth label="Your Name" defaultValue={name} variant="outlined" />
    </div>
  );
}
