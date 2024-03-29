'use client'
import { Box } from "@mui/material";
import SelectCustomOption from './SelectLangueOptions';
import { ThemeButton } from "./ThemeButton";

export const TranslateAndTheme = ({ translateOptions, locale}) => {

  return (
      <Box sx={{ display: 'flex', gap: 1 }}>
   
        <ThemeButton />
        
        <SelectCustomOption 
            options={translateOptions}
            locale={locale}
        />
      </Box>
  );
};


