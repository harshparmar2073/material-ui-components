import { Typography,Slider } from '@mui/material'
import React from 'react'

const SliderExample = () => {
  return (
    <div>
        <Typography variant='h2'>This is Slider component</Typography>

         <Typography>Age </Typography>
      <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />

    </div>
  )
}

export default SliderExample