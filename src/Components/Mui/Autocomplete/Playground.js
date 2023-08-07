// import * as React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';
// import { useController, useForm } from "react-hook-form";

// export default function ComboBoxAutoComplete({ itemsList, onItemChange, name, rules, control }) {

//   //const [value, setValue] = useState(itemsList[0])
//   // const [inputValue, setInputValue] = useState('');


//   // useEffect(() => {
//   //   onItemChange(value)
//   //   console.log("value", value)
//   // }, [value])

//   // const defaultProps = {
//   //   options: itemsList,
//   //   getOptionLabel: (option) => option.name,
//   // };

//   const {
//     field,
//     fieldState: { invalid, isTouched, isDirty, error },
//     formState: { touchedFields, dirtyFields }
//   } = useController({
//     name,
//     control,
//     rules,
//   });

//   return (
//     <Stack spacing={3} sx={{ width: 300 }}>
//       {invalid ? (
//         <span>invalid</span>) : (
//         <span>valid</span>
//       )
//       }

//       <Autocomplete
//         //value={value}
//         onChange={(event, newValue) => {
//           //setValue(newValue)
//           onItemChange(newValue)
//           console.log(newValue)
//         }}

//         // inputValue={inputValue}
//         // onInputChange={(event, newInputValue) => {
//         //   setInputValue(newInputValue)
//         // }}

//         //{...defaultProps}
//         options={itemsList}
//         getOptionLabel={(option) => option.name}
//         id="item-autocomplete"
//         clearOnEscape
//         renderInput={(params) => (
//           <TextField {...params} label="Label" variant="standard" />
//         )}
//       />
//     </Stack>
//   );
// }