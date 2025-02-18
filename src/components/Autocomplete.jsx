import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from "../country.js"

export default function AutocompleteExample() {
  return (
    <Autocomplete
      disablePortal
      options={countries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
}
