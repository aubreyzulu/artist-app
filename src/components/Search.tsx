import { ChangeEvent } from 'react';

import { Box, TextField } from '@mui/material';

interface SearchProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ handleChange }: SearchProps) {
  return (
    <Box sx={{ m: 10, width: '100%' }}>
      <TextField
        sx={{ width: '50%' }}
        type="search"
        variant="outlined"
        fullWidth
        placeholder="Search Artists"
        //@ts-ignore
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
}

export default Search;
