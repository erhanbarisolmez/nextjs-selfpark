'use client'
import CarIcon from '@mui/icons-material/DriveEta';
import { Divider, Grid, Typography } from "@mui/material";
export const MostParkingPlates = () => {
  const mostParkingPlates = [
    { id: "1", image: <CarIcon />, plate: "34 DFG 333", total: "30" },
    { id: "2", image: <CarIcon />, plate: "34 QWE 222", total: "60" },
    { id: "3", image: <CarIcon />, plate: "34 ASD 111", total: "30" },
    { id: "4", image: <CarIcon />, plate: "34 ERT 555", total: "10" },
    { id: "5", image: <CarIcon />, plate: "34 WEQ 444", total: "70" },
    { id: "6", image: <CarIcon />, plate: "34 GFD 888", total: "30" },

  ];
  return (
    <>
      {mostParkingPlates.map((item, index) => (
        <Grid container item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',p:1}}>
          <Grid item xs="12" alignItems={'center'} sx={{ display: 'flex', flexDirection: 'row', minWidth: 100 }}>
            {item.image}
            <Grid item xs={5}><Typography variant='subtitle2'>{item.plate}</Typography></Grid>
            <Typography key={index} variant="caption" >Toplam Park Sayısı:{item.total}</Typography>

          </Grid>


          <Grid item xs={12} mt={2}>
            <Divider orientation="horizontal" variant="fullWidth" />

          </Grid>
        </Grid>
      ))}
    </>
  )
}
