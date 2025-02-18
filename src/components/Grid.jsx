import React from "react";
import { Divider, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';


const GridExample = () => {
  return (
    <>
    <Typography variant="h4" mb={5}>This is Grid component</Typography>
    <Divider/>
    <Typography variant="body2" mb={5} mt={3}>  The Grid component in Material UI is a powerful flexbox-based layout system used for creating responsive designs. It helps in aligning elements in rows and columns efficiently.</Typography>
    
    <Grid container spacing={2}>
    <Grid item xs={6}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>1</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>2</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>3</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>4</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>5</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>6</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>7</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>8</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>9</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>10</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>11</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>12</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>13</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>14</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>15</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>16</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>17</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>18</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>19</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper sx={{ padding: 2, textAlign: "center" }}>20</Paper>
    </Grid>
  </Grid>
  </>
  );
};

export default GridExample;