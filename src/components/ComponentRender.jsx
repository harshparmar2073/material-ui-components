import React, {useState}from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Select, MenuItem, Typography, FormControl, Dialog, Button, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function ComponentRender() {
  const { component } = useParams(); 
  const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
      <Typography variant="h4" mb={2}>Selected Component: {component}</Typography>

      {/* {component === 'textfield' && (
        <TextField fullWidth label="Your Name" defaultValue="Harsh" variant="outlined" />
      )} */}

      {component === 'select' && (
        <FormControl fullWidth>
          <Select >
            <MenuItem value="" disabled>Select Domain</MenuItem>
            <MenuItem value="option1">Web Development</MenuItem>
            <MenuItem value="option2">App Development</MenuItem>
            <MenuItem value="option3">Data Science</MenuItem>
          </Select>
        </FormControl>
      )}
    {component=== 'dialog' &&(
        <div>
         <Button variant="contained" onClick={handleOpen} >
         Open Dialog
       </Button>
 
       <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Material-UI</DialogTitle>
         <DialogContent>
           <Typography>
           MUI provides pre-styled components for React.
           </Typography>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color="primary">
             Close
           </Button>
         </DialogActions>
       </Dialog>
       </div>
    )}

    </div>
  );
}
