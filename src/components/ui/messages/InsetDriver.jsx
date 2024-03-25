import { useThemeHook } from '@/hooks/useThemeHook';
import ForumIcon from '@mui/icons-material/ForumOutlined';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Divider from '@mui/joy/Divider';
import Drawer from '@mui/joy/Drawer';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Grid } from "@mui/material";
import * as React from 'react';
import { TextArea } from './TextArea';
export default function InsetDriver() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');
  const [amenities, setAmenities] = React.useState([0, 6]);
  const { getThemeStyles } = useThemeHook();
  const { backgroundColor, textColor, buttonColor, headerBorderBottom, isDarkMode } = getThemeStyles();
  const toggleOpenDrawer = () => {
    setOpen(!open);
  }
  return (
    <React.Fragment>

      <ForumIcon onClick={toggleOpenDrawer} />

      <Drawer
        size="md"
        variant={isDarkMode ? 'solid' : 'plain'}
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
            justifyContent: 'right',
            backgroundColor: backgroundColor,
            color: textColor
          }}
        >
          <DialogTitle>John Doe</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
                <Typography sx={{ color: textColor }}>Subject: Hi</Typography>
              </FormLabel>

              {/* INBOX */}
              <Box sx={{
                display: 'flex',
                gap: '2',
                alignItems: ' end'

              }}>

                <Typography sx={{ backgroundColor: '#f8f5ff', p: 2 }}>
                  How likely are you to recommend our company to your friends and family ?
                </Typography>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, justifyContent: 'space-evenly' }}>
                  <Typography>
                  </Typography>
                  <Avatar alt="John Doe" src="/broken-image.jpg" sx={{backgroundColor:'#f8f5ff'}}/>
                </Grid>
              </Box>

              {/* MESSAGE */}
              <Box sx={{
                display: 'flex',
                gap: '2',
                mt: 3,
                alignItems: 'end',
              }}>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, justifyContent: 'space-around' }}>
                  <Avatar alt="ME" src="/broken-image.jpg" sx={{backgroundColor:'#e9f3ff'}} />
                </Grid>
                <Typography sx={{ backgroundColor: '#e9f3ff', p: 2 }}>
                  How likely are you to recommend our company to your friends and family ?
                </Typography>
              </Box>
            </FormControl>

          </DialogContent>
          <Box>
            <Typography level="title-md" fontWeight="bold" sx={{ mt: 2, color: textColor }}>
              TO:
            </Typography>

            <TextArea />
          </Box>

          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
              sx={{
                color: buttonColor,
                ':hover': {
                  backgroundColor: isDarkMode ? headerBorderBottom : ''
                }
              }}
              variant="outlined"
              onClick={() => {
                setType('');
                setAmenities([]);
              }}
            >
              Clear
            </Button>
            <Button
              sx={{
                backgroundColor:'#b2bfe4',
                 ':hover':{
                  backgroundColor: isDarkMode ? headerBorderBottom : '#b2bfe4',
                  backgroundColor: !isDarkMode ?  '#b2bfe4' : '#b2bfe4'
                 }
              }}
              onClick={() => setOpen(false)}>
              SEND
            </Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}