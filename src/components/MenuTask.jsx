import * as React from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MenuTask() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (component) => {
    if (component === 'textfield') {
      navigate(`/textfield/Harsh`);
    } else {
      navigate(`/${component}`);
    }
    handleClose();
  };

  return (
    <div>
      <Typography variant="h3" mb={3}> Menu Task Using Routing</Typography>
      
      <Button onClick={handleClick} variant="contained">
        Select Component
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleSelect('textfield')}>TextField</MenuItem>
        <MenuItem onClick={() => handleSelect('select')}>Select</MenuItem>
        <MenuItem onClick={() => handleSelect('dialog')}>Dialog</MenuItem>

      </Menu>
    </div>
  );
}
