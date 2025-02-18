import React, { useState } from "react";
import { Drawer, Button, List, ListItem, ListItemText, Box, Typography } from "@mui/material";


export default function DrawerExample() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <div>
        <Typography variant='h2' mb={6}>This is Drawer component</Typography>
      <Button onClick={toggleDrawer(true)} variant="contained">
        Open Drawer
      </Button>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
