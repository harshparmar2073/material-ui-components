import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TypographyExample() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        h1 Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2 Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3 Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5 Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6 Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      Use typography to present your design and content as clearly and efficiently as possible.
      </Typography>
     
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>

    </Box>
  );
}
