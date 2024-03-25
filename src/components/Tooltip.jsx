import { useThemeHook } from '@/hooks/useThemeHook';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
export default function TooltipMUI({
  menuIcon,
  name,
  date,
  system,
  titleIcon,
  title,
  message,
  chip1,
  chip2

}) {
  const { getThemeStyles } = useThemeHook();
  const { textColor, backgroundColor, isDarkMode } = getThemeStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose= () => {
    setOpen(false);
  }

  return (
    <Tooltip

      placement="bottom"
      variant="outlined"
      arrow
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        zIndex:1
      }}
      title={
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 320,
            justifyContent: 'center',
            p: 1,
            color: textColor
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Typography
              fontSize="sm"
              textColor={textColor}
              startDecorator={
                <Link
                  underline="always"
                  href="#common-examples"
                  fontSize="sm"
                  sx={{
                    textColor: isDarkMode ? 'white' : 'dark'
                  }}
                >
                  {name}

                </Link>
              }
            >
              {date}
            </Typography>
            <CloseIcon onClick={handleClose}/>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, width: '100%', mt: 1, }}>
            {titleIcon}
            <div>
              <Typography fontWeight="lg" fontSize="sm" sx={{ color: textColor }}>
                {system} {title}
              </Typography>
              <Typography textColor="text.secondary" fontSize="sm" sx={{ mb: 1, color: textColor }}>
                {message}
              </Typography>
              {chip1 && (
                <Chip size="sm" color="danger" sx={{ fontWeight: 'lg' }}>
                  {chip1}
                </Chip>
              )}
              {chip2 && (
                <Chip size="sm" color="primary" sx={{ ml: 1, fontWeight: 'lg' }}>
                  {chip2}
                </Chip>
              )}
            </div>
          </Box>
        </Box>
      }
      onClick={handleClick}
      open={open}
    >
      <Link
        href="#common-examples"
        underline="none"
        startDecorator={menuIcon}
        sx={{ fontWeight: 'lg' }}
      >

      </Link>
    </Tooltip>
  );
}
