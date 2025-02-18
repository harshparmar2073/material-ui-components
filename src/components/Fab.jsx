import { Fab, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const FabExample= () => {
  return (
    <div>
        <Typography variant='h2'>This is Floating Action Button </Typography>

        <Fab color="secondary" aria-label="account">
         <AccountCircleIcon />
    </Fab>
    </div>
  )
}

export default FabExample