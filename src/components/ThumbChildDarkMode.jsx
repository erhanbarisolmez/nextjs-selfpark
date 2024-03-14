'use client'
import { DarkMode } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import Switch from '@mui/joy/Switch';
export default function ThumbChildDarkMode({onChange, childIcon}) {
  return (
    <Switch
    onChange={onChange}
      size="lg"
      slotProps={{
        input: { 'aria-label': 'Light Mode' },
        thumb: {
          children: childIcon === 'light' ? <LightModeIcon/>  :  <DarkMode/> ,

        },
      }}
      sx={{
        '--Switch-thumbSize': '32px',
      }}
    />
  );
}