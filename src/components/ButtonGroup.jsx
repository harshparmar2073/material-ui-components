import { Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'

const ButtonGroupExample = () => {
  return (
    <>
    <Typography variant='h2'> This is Button Group </Typography>
 <ButtonGroup variant="outlined" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
</>
  )
}

export default ButtonGroupExample