import { useThemeHook } from '@/hooks/useThemeHook';
import Button from '@mui/joy/Button';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import * as React from 'react';

export default function ModalMUI({ menu, dialogTitle, tabsSegmentedControls, sxCardInfoButton, cardInfoButton }) {
  const [layout, setLayout] = React.useState(undefined);
  const { getModalStyles } = useThemeHook();
  const { textColor, modalHover, modalDialogBackground, modalCloseButton } = getModalStyles();
  return (
    <React.Fragment>
      {menu && (
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color={'neutral'}
            onClick={() => {
              setLayout('center');
            }}
            sx={{
              color: textColor,
              ":hover": {
                bgcolor: modalHover,
              },
            }}
          >
            {menu}
          </Button>

        </Stack>
      )}

    {/* {cardInfoButton &&(
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color={'neutral'}
          onClick={() => {
            setLayout('center');
          }}
          sx={sxCardInfoButton}
        >
          {cardInfoButton}     
        </Button>
 
      </Stack>
      )} */}


      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout} sx={{ width: '60%', height: '80%', backgroundColor: modalDialogBackground, color: textColor }}>
          <ModalClose  variant={modalCloseButton} sx={{ backgroundColor:modalDialogBackground,}}/>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>
            {tabsSegmentedControls}
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}