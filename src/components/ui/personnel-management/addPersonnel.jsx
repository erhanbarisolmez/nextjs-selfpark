import { ButtonComponent } from '@/components/ButtonComponent';
import CardComponent from '@/components/CardComponent';
import InputComponent from '@/components/InputComponent';
import { useAuth } from '@/hooks/useAuth';
import { useThemeHook } from '@/hooks/useThemeHook';
import { FormLabel } from "@mui/joy";
import { Container, Grid } from "@mui/material";
import { useState } from 'react';
import ServiceManager from '../../../../api/service_management/ServiceManager';
const AddPersonnel = () => {
  const [formData, setFormData] = useState({});
  const { getModalStyles } = useThemeHook();
  const {  modalCard, modalDialogBackground, textColor} = getModalStyles();
  const serviceManager = new ServiceManager();
  const token = useAuth();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      ...formData
    }
    await serviceManager.personnelService.addPersonnel(token, data);
    
  }
  
  return (
    <CardComponent
      sx={{
        backgroundColor: modalDialogBackground
      }}
      children={
        <Grid container spacing={2}>
          <Container>
            <form  onSubmit={handleSubmit} method="POST"> 
              <Grid container item xs={12} sm={12} spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <Grid item xs={12} sm={12} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Park Name</FormLabel>
                  <InputComponent
                    placeholder={"Park Name"}
                    name='parkName'
                    value={formData.parkName}
                    onChange={handleChange}

                  />
                </Grid>

                <Grid item xs={12} sm={12} mt={1}>
                  <FormLabel sx={{ color:textColor}}>First Name</FormLabel>
                  <InputComponent
                    placeholder={"First Name"}
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={12} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Last Name</FormLabel>
                  <InputComponent
                    placeholder={"Last Name"}
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}

                  />
                </Grid>


                <Grid item xs={12} sm={12} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Email</FormLabel>
                  <InputComponent
                    placeholder={"Email"}
                    name='email'
                    value={formData.email}
                    onChange={handleChange}

                  />
                </Grid>

                <Grid item xs={12} sm={12} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Phone</FormLabel>
                  <InputComponent
                    placeholder={"Phone"}
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}

                  />
                </Grid>


                <Grid item xs={12} sm={12} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Task</FormLabel>
                  <InputComponent
                    placeholder={"Task"}
                    name='task'
                    value={formData.task}
                    onChange={handleChange}

                  />
                </Grid>
              </Grid>


              <Grid item xs={12} sx={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center', mt: 3 }}>
                <ButtonComponent
                  type="submit"
                  text={"SAVE"}
                  color={"neutral"}
                />
              </Grid>
            </form>
          </Container>
        </Grid>

    } />


  )
}

export default AddPersonnel