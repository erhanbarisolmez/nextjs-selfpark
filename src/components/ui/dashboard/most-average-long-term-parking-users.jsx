'use client'
import TimeIcon from '@mui/icons-material/AccessTime';
import { Divider, Grid, Typography } from "@mui/material";
export const LongTermParkingUsers = () => {
  const longTermParkingUsers = [
    { id: "1", icon: <TimeIcon />, name: "Ahmet", averageTime: "4 saat 30 dakika" },
    { id: "2", icon: <TimeIcon />, name: "Mehmet", averageTime: "4 saat 30 dakika" },
    { id: "3", icon: <TimeIcon />, name: "Ayşe", averageTime: "4 saat 30 dakika" },
    { id: "4", icon: <TimeIcon />, name: "Su", averageTime: "4 saat 30 dakika" },
    { id: "5", icon: <TimeIcon />, name: "Ateş", averageTime: "4 saat 30 dakika" },
    { id: "6", icon: <TimeIcon />, name: "Merve", averageTime: "4 saat 30 dakika" },

  ]
  return (
    <>
      {longTermParkingUsers.map((item, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            p:3
          }}>
            <Grid item xs={4}>
              <Typography variant='subtitle2'>{item.icon}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>{item.averageTime}</Typography>
              <Divider orientation='horizontal' variant='fullWidth'></Divider>

            </Grid>
            <Grid item xs={9} sx={{ml:3}}>
              <Typography variant='subtitle2' >{item.name}</Typography>
              <Divider orientation='horizontal' variant='fullWidth'></Divider>
            </Grid>
          </Grid>

        </Grid>
      ))}

    </>
  )
}
