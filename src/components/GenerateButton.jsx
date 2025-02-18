import React from "react";
import { useParams } from "react-router-dom";
import { Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function GenerateButtons() {
  const { count } = useParams();
  const buttonCount = parseInt(count);

  const buttons = [];
  for (let i = 1; i <= buttonCount; i++) {
    buttons.push(
      <Grid item xs={6} sm={4} md={3} key={i}>
        <Button variant="contained" fullWidth>
          Button {i}
        </Button>
      </Grid>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        Generated {buttonCount} Buttons
      </Typography>
      <Grid container spacing={2}>{buttons}</Grid>
    </Container>
  );
}
