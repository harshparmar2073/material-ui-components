import React from "react";
import { Container, Divider, Typography } from "@mui/material";

const ContainerExample = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        This is Container component
      </Typography>
      <Divider/>
      <Typography variant="body1">
      The Container component in Material UI is used to center and constrain the width of content. It helps in maintaining responsive layouts by automatically adjusting based on screen size.
      </Typography>
    </Container>
  );
};

export default ContainerExample;
