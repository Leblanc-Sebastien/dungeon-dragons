import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function ComboBoxAutoComplete({ item, setItem }) {

  const [inputValue, setInputValue] = useState('');

  

  useEffect(() => {
    console.log(typeof setItem)
    // setItem(inputValue)
  }, [inputValue])

  const defaultProps = {
    options: item,
    getOptionLabel: (option) => option.name,
  };

  const flatProps = {
    options: item.map((option) => option.name),
  };

  return (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        {...defaultProps}
        id="item-autocomplete"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Label" variant="standard" />
        )}
      />
    </Stack>
  );
}