import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function CountrySelector({value, handleOnChange, countries}) {
  return (
    <FormControl>
        <InputLabel htmlFor="country-selector" shrink>
          Quốc gia
        </InputLabel>
        <NativeSelect 
          value={value}
          onChange={handleOnChange}
          inputProps={{
            name: 'Country',
            id: 'country-selector'
          }}
          >
            {
              countries.map((country) => {
                return (
                <option value={country.ISO2.toLowerCase()}>
                  {country.Country}
                </option>
                );  
              })
            }   
        </NativeSelect>
        <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
    );
}
