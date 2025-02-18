import React from "react";
import { List, ListItem, ListItemText, Divider, Typography, ListItemIcon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
const ListsExample = () => {
  return (
    <>
    <Typography variant="h2">This is List  and Divider component</Typography>
    <List sx={{ width: 300, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemText primary="JavaScript" secondary="Web Development" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Python" secondary="Data Science & AI" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="C++" secondary="Game Development" />
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </List>
    </>
  );
};

export default ListsExample;
