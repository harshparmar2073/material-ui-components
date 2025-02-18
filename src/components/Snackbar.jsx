import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

const SnackbarExample = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="This is a snackbar!"
      />
    </>
  );
};

export default SnackbarExample;
