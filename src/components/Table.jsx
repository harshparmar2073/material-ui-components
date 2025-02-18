import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const TableExample = () => {
  return (
    <>
    <Typography variant="h2">  This is Table component</Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Programming Language</TableCell>
            <TableCell>Used In</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>JavaScript</TableCell>
            <TableCell>Web Development</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Python</TableCell>
            <TableCell>Data Science, AI, Web</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Java</TableCell>
            <TableCell>Enterprise Applications</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Swift</TableCell>
            <TableCell>iOS App Development</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default TableExample;
