import React from 'react';
import { Stack, Button } from '@mui/material';

function StackExample() {
  return (
    <Stack direction="column" spacing={2}>
      <Button variant="contained">Button 1</Button>
      <Button variant="outlined">Button 2</Button>
      <Button variant="text">Button 3</Button>
      <Button variant="outlined">Button 4</Button>
      <Button variant="outlined">Button 5</Button>
    </Stack>
  );
}

export default StackExample;
