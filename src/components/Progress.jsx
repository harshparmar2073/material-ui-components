import React from "react";
import { CircularProgress, LinearProgress, Box, Typography } from "@mui/material";

const ProgressExample = () => {
  return (
    <Box sx={{ width: 300, textAlign: "center", p: 2 }}>
        <Typography variant="h2" mb={2}>This is Progress Component</Typography>
      <Typography variant="h6">Circular Progress</Typography>
      <CircularProgress />
      <CircularProgress color="secondary" sx={{ ml: 2 }} />

      <Typography variant="h6" sx={{ mt: 3 }}>Linear Progress</Typography>
      <LinearProgress />
      <LinearProgress color="secondary" sx={{ mt: 1 }} />
    </Box>
  );
};

export default ProgressExample;
