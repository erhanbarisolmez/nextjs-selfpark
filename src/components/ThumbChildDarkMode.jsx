import { DarkMode } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import Switch from '@mui/joy/Switch';
export default function ThumbChildDarkMode({onChange, childIcon}) {
  return (
    <Switch
    onChange={onChange}
      size="lg"
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: childIcon === 'dark' ?  <DarkMode/>  : <LightModeIcon/> ,

        },
      }}
      sx={{
        '--Switch-thumbSize': '32px',
      }}
    />
  );
}