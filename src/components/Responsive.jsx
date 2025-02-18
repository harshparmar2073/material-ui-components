import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';

const ResponsiveExample = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, textAlign: "center" }}>
        Responsive Grid Example
      </Typography>

      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Content 1</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is the first content block.The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid component.
              </Typography>
              <Button variant="contained">Read More</Button>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Content 2</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is the second content block.The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid component.
              </Typography>
              <Button variant="contained">Read More</Button>
            </CardContent>
          </Card>
        </Grid>

    
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Content 3</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is the third content block.The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid component.
              </Typography>
              <Button variant="contained">Read More</Button>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Content 4</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is the fourth content block.The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid component.
              </Typography>
              <Button variant="contained">Read More</Button>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Content 5</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is the fifth content block.The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid component.
              </Typography>
              <Button variant="contained">Read More</Button>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Content 6</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is the sixth content block.The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the Grid component.
              </Typography>
              <Button variant="contained">Read More</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveExample;
