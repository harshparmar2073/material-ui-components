import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import country from "../country";

const SelectExample = () => {
  const [selectedCountry, setSelectedCountry] = useState(""); 

  const handleChange = (event) => {
    setSelectedCountry(event.target.value); 
  };

  return (
    <div>
      <Typography variant="h4">This is Select Component</Typography>

      <Select
        fullWidth
        value={selectedCountry} 
        onChange={handleChange} 
        displayEmpty
      >
        <MenuItem value="" disabled>
          Select Country
        </MenuItem>
        {country.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectExample;
