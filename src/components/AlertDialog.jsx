'use client'
import { useThemeHook } from '@/hooks/useThemeHook';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  onClose,
  onConfirm
}) {

  const {getModalStyles} = useThemeHook();
  const {modalDialogBackground, textColor} = getModalStyles();


  const handleClose = () => {
    onClose(false);
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          zIndex: 9999,
          mb:'30%'
        }}
      >
        <Box sx={{
              backgroundColor: modalDialogBackground,
              color: textColor,
              border:1,
              borderColor:'white',
              borderRadius:1
        }}>
        <DialogTitle>{"Delete Item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"
          sx={{
            color:textColor
          }}
          >
          Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{
          color:textColor
        }}>Cancel</Button>
          <Button onClick={handleConfirm} sx={{
          color:textColor
        }}>Confirm</Button>
        </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
