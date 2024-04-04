'use client'
import { ButtonComponent } from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";
import InputComponent from "@/components/InputComponent";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Container, Grid, Typography } from '@mui/material';
import { useState } from "react";
import Park from "@/api/Park";

const AddParkContent = ({ searchLngLat }) => {

  const [formData, setFormData] = useState({});
  const { lat, lng } = searchLngLat || {};
  const {getModalStyles} = useThemeHook();
  const {modalDialogBackground,textColor} = getModalStyles();
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: API request to add
    const park = new Park();
    await park.addPark(formData);

  }

  return (
    <CardComponent 
    sx={{
      backgroundColor: modalDialogBackground,
      color: textColor

    }}
      children={
        <Grid container spacing={2}>
        <Container>
    
      <form onSubmit={handleSubmit} method="POST">
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: {xs: 'column', md :"row"},  alignItems: 'center', alignContent:'center' }}>
          <Container>
          <Typography variant="body1" xs sx={{ display: 'flex', alignItems: 'center', mt: 3, justifyContent:'center' }} >
            BİLGİ
          </Typography>
          <Typography variant="body2" mt={1}>Longitude</Typography> 
          <InputComponent
            xs={12} md= {5}
            placeholder="Enlem"
            name="longitude"
            value={lng}
            disabled={true}
          />
          <Typography variant="body2" mt={2}>Latitude</Typography>
          <InputComponent
            xs={12} md = {5}
            placeholder="Boylam"
            name="latitude"
            value={lat}
            disabled={true}
          />
          </Container>
        </Grid>
        <Grid item xs={12} mt={1}>
          <InputComponent
            placeholder={"Otopark Adı"}
            name='parkName'
            value={formData.parkName}
            onChange={handleChange}

          />
        </Grid>
        <Grid item xs={12}>
          <InputComponent
            placeholder={"Şehir"}
            name='city'
            value={formData.city}
            onChange={handleChange}

          />
        </Grid>
        <Grid item xs={12}>
          <InputComponent
            placeholder={"İlçe"}
            name='district'
            value={formData.district}
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12}>
          <InputComponent
            placeholder={"Kapasite"}
            name='capacity'
            value={formData.capacity}
            onChange={handleChange}

          />
        </Grid>
        <Grid item xs={12}>
          <InputComponent
            placeholder={"Boş Kapasite"}
            name='emptyCapacity'
            value={formData.emptyCapacity}
            onChange={handleChange}

          />
        </Grid>

        <Grid item xs={12}>
          <InputComponent
            placeholder={"Çalışma Saatleri"}
            name='workHours'
            value={formData.workHours}
            onChange={handleChange}

          />
          <Grid item xs={12}>
            <InputComponent
              placeholder={"Ücretsiz Park Süresi"}
              name='freeTime'
              value={formData.freeTime}
              onChange={handleChange}

            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: "column"}} >
            <Grid xs={12}>
              <InputComponent
                placeholder={"Park Tipi - AÇIK/KAPALI"}
                name='park_type'
                value={formData.park_type}
                onChange={handleChange}

              />
            </Grid>
            <Grid xs={12}>
              <InputComponent
                placeholder={"DURUM - AKTİF/PASİF"}
                name='enable'
                value={formData.enable}
                onChange={handleChange}

              />
            </Grid>
            <Grid xs={12}>
              <InputComponent
                placeholder={"DURUM - AÇIK/KAPALI"}
                name='is_open'
                value={formData.is_open}
                onChange={handleChange}

              />
            </Grid>


          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center', mt: 2 }}>
            <ButtonComponent
              type="submit"
              text={"KAYDET"}
              color={"neutral"}

            />
          </Grid>
        </Grid>
      </form>
      </Container>
    </Grid>
      
      }
    />

  )
}

export default AddParkContent