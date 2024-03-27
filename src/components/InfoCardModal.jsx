import { useThemeHook } from '@/hooks/useThemeHook';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Grid } from "@mui/material";
import * as React from 'react';
export default function InfoCardModal({
  buttonIcon,
  header,
  sx,
  data,
}) {
  const [open, setOpen] = React.useState(false);
  const { getModalStyles } = useThemeHook();
  const { infoCardButton, modalDialogBackground, textColor, modalCloseButton } = getModalStyles();
  return (
    <React.Fragment>
      <Button variant={infoCardButton} color={"neutral"} onClick={() => setOpen(true)}>
        {buttonIcon}
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...sx }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            backgroundColor: modalDialogBackground,
            color: textColor
          }}
        >
          <ModalClose variant={modalCloseButton} color='neutral' sx={{ m: 1, backgroundColor: 'transparent', }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {header}
          </Typography>
          <Grid container>
            <Grid item xs={12} minWidth={300} >
              <Grid item xs={12}>
                <Typography level='title-md' textColor="inherit"> Name: <Typography level='body-md' textColor="inherit">{data.name}</Typography></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography level='title-md' textColor="inherit"> Capacity: <Typography level='body-md' textColor="inherit">{data.capacity}</Typography></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography level='title-md' textColor="inherit"> Work Hours: <Typography level='body-md' textColor="inherit">{data.workHours}</Typography></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography level='title-md' textColor="inherit"> Free Parking Duration: <Typography level='body-md'>{data.freeParkingDuration}</Typography></Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', justifyItems: 'center' }}>
                <Grid item xs={2}>
                  <EditOutlinedIcon />
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', textAlign: 'right', justifyContent: 'flex-end' }}>
                  <DeleteOutlinedIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}