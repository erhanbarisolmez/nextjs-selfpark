'use client'
import { useThemeHook } from '@/hooks/useThemeHook';
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@mui/icons-material';
import { Input } from '@mui/joy';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Grid } from "@mui/material";
import { Fragment, useState } from 'react';
import AlertDialogSlide from './AlertDialog';

export default function InfoCardModal({
  buttonIcon,
  header,
  sx,
  data,
  propertiesShow,
  propertiesName,
  deleteOnClick,
  handleSaveClick
}) {
  const [open, setOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editableOpen, setEditableOpen] = useState(true);
  const [editData, setEditData] = useState({...data})
  const { getModalStyles } = useThemeHook();
  const { infoCardButton, modalDialogBackground, textColor, modalCloseButton } = getModalStyles();
  
  

  const handleChange = (e, property) => {
    const  {value} = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [property]: value
    }))
  }
  const handleEditClick = () => {
    setEditableOpen(!editableOpen);
  }

  const handleSave = async() => {
    console.log("handleSave edit.id: ", editData.id);
    console.log("handleSave edit.data: ", editData)
    await handleSaveClick(editData.id, editData);
    setEditData({...editData});
    setEditableOpen(true);
  }

  const handleDeleteClick = () => {
    console.log("seçilen id: ", data.id); 
    setShowConfirmation(true);
  }

  const handleDeleteConfirmation = () => {
    deleteOnClick(data.id);
    setShowConfirmation(false);
    setOpen(false);
  }

  return (
    <Fragment>
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
          <ModalClose variant={modalCloseButton} color='neutral' sx={{ m: 1, backgroundColor: 'transparent' }} />
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

              {propertiesShow.map((property, index) => (
                <Grid item xs={12} key={index}>
                  <Typography level='title-md' textColor="inherit">
                    {propertiesName[property]}:
                    {editableOpen ? (
                      <Typography>
                        {data[property]}
                      </Typography>) : (
                      <Input
                        type='text'
                        name='property'
                        value={editData[property]}
                        onChange={(e) => handleChange(e, property)}
                      />
                    )}
                  </Typography>
                </Grid>
              ))}

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', justifyItems: 'center', mt: 3 }}>
                <Grid item xs={1}>
                  <EditOutlined onClick={handleEditClick} />
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', textAlign: 'right', justifyContent: 'flex-end' }}>
                  <SaveOutlined onClick={handleSave} />
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', textAlign: 'right', justifyContent: 'flex-end' }}>
                  <DeleteOutlined onClick={handleDeleteClick} />
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Sheet>
      </Modal>


      <AlertDialogSlide
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleDeleteConfirmation}

      />

    </Fragment>
  );
}