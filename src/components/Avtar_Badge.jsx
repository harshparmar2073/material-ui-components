import { Avatar, Badge, Typography } from '@mui/material'
import { Mail } from "@mui/icons-material";
import React from 'react'

const Avtar_Badge = () => {
  return (
    <div>
        <Typography variant='h2'mb={6}> This is Avtar and Badge Component</Typography>
         <Badge badgeContent={4} color="error">
              <Mail/>
            </Badge>
            <Avatar
              sx={{ width: 80, height: 80 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
    </div>
  )
}

export default Avtar_Badge