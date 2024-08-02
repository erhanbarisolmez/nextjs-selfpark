'use client'
import { ButtonComponent } from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";
import InputComponent from "@/components/InputComponent";
import { useAuth } from "@/hooks/useAuth";
import { useThemeHook } from "@/hooks/useThemeHook";
import { FormLabel } from "@mui/joy";
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import { Container, Grid } from '@mui/material';
import { useState } from "react";
import ServiceManager from "../../../../api/service_management/ServiceManager";


const AddParkContent = ({ searchLngLat }) => {

  const [formData, setFormData] = useState({});
  const { lat, lng } = searchLngLat || {};
  const { getModalStyles } = useThemeHook();
  const { modalDialogBackground, textColor} = getModalStyles();
  const [enable, setEnable] = useState(false);
  const [parkType, setParkType] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const serviceManager = new ServiceManager();
  const { token } = useAuth();
  
  const handleToggleChange = (setter) => (event, newValue) => {
    setter(newValue);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const parkData = {
      ...formData,
      lat,
      lng,
      isOpen,
      enable,
      parkType : parkType ? "açık" : "kapalı"
    }

     await serviceManager.parkService.add_park(parkData, token);
    
  }

  return (
    <CardComponent
      sx={{
        backgroundColor: modalDialogBackground
      }}
      children={
        <Grid container spacing={2}>
          <Container>

            <form onSubmit={handleSubmit} method="POST">
              <Grid container item xs={12} sm={12} spacing={2} sx={{
                display: 'flex',
                flexDirection: {
                  sm: 'row',
                  xs: 'column'
                },
                justifyContent: 'space-between',
              }}>
                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Park Name</FormLabel>
                  <InputComponent
                    placeholder={"Park Name"}
                    name='parkName'
                    value={formData.parkName}
                    onChange={handleChange}

                  />
                </Grid>

                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>City</FormLabel>
                  <InputComponent
                    placeholder={"City"}
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>District</FormLabel>
                  <InputComponent
                    placeholder={"District"}
                    name='district'
                    value={formData.district}
                    onChange={handleChange}

                  />
                </Grid>


                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Capacity</FormLabel>
                  <InputComponent
                    placeholder={"Capacity"}
                    name='capacity'
                    value={formData.capacity}
                    onChange={handleChange}

                  />
                </Grid>

                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Empty Capacity</FormLabel>
                  <InputComponent
                    placeholder={"Empty Capacity"}
                    name='emptyCapacity'
                    value={formData.emptyCapacity}
                    onChange={handleChange}

                  />
                </Grid>


                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Work Hours</FormLabel>
                  <InputComponent
                    placeholder={"Work Hours"}
                    name='workHours'
                    value={formData.workHours}
                    onChange={handleChange}

                  />
                </Grid>

                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Free Time</FormLabel>
                  <InputComponent
                    placeholder={"Free Time"}
                    name='freeTime'
                    value={formData.freeTime}
                    onChange={handleChange}

                  />

                </Grid>


                <Grid item xs={12} sm={6} mt={1}>
                  <FormLabel sx={{ color:textColor}}>Park Type</FormLabel>
                  <Select
                    variant="soft"
                    placeholder="Parking  Type"
                    value={parkType}
                    onChange={handleToggleChange(setParkType)}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <Option value={true}>
                      Outdoor park
                    </Option>
                    <Option value={false}>
                      Indoor park
                    </Option>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6} mt={1}>
                <FormLabel sx={{ color:textColor}}>Enabled</FormLabel>
                <Select
                    variant="soft"
                    placeholder="DURUM"
                    value={enable}
                    onChange={handleToggleChange(setEnable)}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <Option value={true}>
                      True
                    </Option>
                    <Option value={false}>
                      False
                    </Option>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6} mt={1}>
                <FormLabel sx={{ color:textColor}}>Is Open</FormLabel>
                <Select
                    variant="soft"
                    placeholder="DURUM"
                    value={isOpen}
                    onChange={handleToggleChange(setIsOpen)}
                    sx={{

                      width: '100%'
                    }}
                  >
                    <Option value={true}>
                      Active
                    </Option>
                    <Option value={false}>
                      Passive
                    </Option>

                  </Select>
                </Grid>


              </Grid>

              <Grid item xs={12} sm={6}>

                
              </Grid>
              {/* <Grid item xs={12} sm={6} mt={1} sx={{
                display:'flex',
                flexDirection:'column',
                width:'100%'
              }}>
                  <FormLabel sx={{color:'white'}}>Address</FormLabel>
                    <InputComponent
                      placeholder={"Address"}
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                     sx={{
                      width:'100%',
                      height:50,
                      borderRadius:5,
                      padding:1,
                   
                     }}

                    />
                  </Grid> */}

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

      }
    />

  )
}

export default AddParkContent