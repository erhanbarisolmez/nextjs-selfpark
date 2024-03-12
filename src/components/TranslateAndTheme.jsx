'use client'
import { Box } from "@mui/material";
import SelectCustomOption from './SelectCustomOptions';
import { ThemeButton } from "./ThemeButton";

export const TranslateAndTheme = ({ translateOptions}) => {

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1 }}>
   
        <ThemeButton />
        
        <SelectCustomOption 
            options={translateOptions}
        />
      </Box>
    </>
  );
};


