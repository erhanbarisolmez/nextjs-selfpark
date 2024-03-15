import { useThemeHook } from '@/hooks/useThemeHook';
import Button from '@mui/joy/Button';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import * as React from 'react';
import TabsSegmentedControls from './TabsSegmentedControlMUI';

export default function ModalMUI({menu, dialogTitle}) {
  const [layout, setLayout] = React.useState(undefined);
  const {getThemeStyles} = useThemeHook();
  const { textColor, modalHover} = getThemeStyles();
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color={'neutral'}
          onClick={() => {
            setLayout('center');
          }}
          sx={{
            color:textColor,
            ":hover":{
              bgcolor:modalHover,
              
            }
            
          }}
        >
          {menu}
        </Button>
        {/* <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen');
          }}
        >
          Full screen
        </Button> */}
      </Stack>
      <Modal open={!!layout} onClose={() => setLayout(undefined)} sx={{
      
      }}>
        <ModalDialog layout={layout} sx={{width:'80%', height:'80%'}}> 
          <ModalClose />
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>
            <div>
              <TabsSegmentedControls />
              
            </div>

          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}