import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const ButtonExample = () => {
  return (
    <div>

        <Typography variant='h2'> This is Button</Typography>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Button variant="contained" color="primary" type="submit"> Submit</Button>
    </div>
  )
}

export default ButtonExample