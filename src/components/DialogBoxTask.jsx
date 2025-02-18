import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const DialogBoxTask = () => {
    
    const [open, setOpen] = useState(false);
    const [count,setCount]= useState("");
    const navigate =useNavigate()
    function handleClose(){
        setOpen(false)
    }
    function handleOpen(){
        setOpen(true)
    }
     function handleGenerate(){
        if (count > 0) {
          navigate(`/generate/${count}`);
          setOpen(false);
        } else {
          alert("Please enter a valid number greater than 0!");
        }
      };
      

  return (
    <div>
    <Button variant="contained" onClick={handleOpen} >
        Open Dialog
    </Button>

    <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Enter Number of buttons to generate</DialogTitle>
        <DialogContent>
            <TextField
                fullWidth
                label="Enter Some Number"
                type="number"
                value={count}
                onChange={(e)=> setCount(e.target.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button  variant="outlined" onClick={handleClose} color='error'>Cancel</Button>
            <Button variant='contained' onClick={handleGenerate} color='secondary'>Generate</Button>
        </DialogActions>
    </Dialog>

    </div>
  )
}

export default DialogBoxTask