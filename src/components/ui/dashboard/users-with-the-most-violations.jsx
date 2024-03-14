'use client'
import WarningIcon from '@mui/icons-material/WarningAmber';
import { Divider, Grid, Typography } from "@mui/material";

export const UsersWTMViolations = () => {
  const  usersWTMViolations = [
    {id:"1", icon:<WarningIcon />, name: "Ahmet", ruleViolation:"15", penaltyPaid: "1500TL"},
    {id:"2", icon:<WarningIcon />, name: "Mehmet", ruleViolation:"12", penaltyPaid: "2500TL"},
    {id:"3", icon:<WarningIcon />, name: "Ayşe", ruleViolation:"5", penaltyPaid: "500TL"},
    {id:"4", icon:<WarningIcon />, name: "Su", ruleViolation:"22", penaltyPaid: "4500TL"},
    {id:"5", icon:<WarningIcon />, name: "Ateş", ruleViolation:"1", penaltyPaid: "100TL"},
    {id:"6", icon:<WarningIcon />, name: "Merve", ruleViolation:"4", penaltyPaid: "400TL"},

  ]
  return (
    <>
    {usersWTMViolations.map((item,index) => (
      <Grid container spacing={2} key={index}>
          <Grid item xs={12} key={index.id} sx={{display:'flex', flexDirection:'row',alignItems:'right',textAlign:'center'}}>
            <Grid item xs={2}>{item.icon}</Grid>
            <Grid item xs={4}><Typography variant='subtitle2'>{item.name}</Typography></Grid>
            <Grid item xs={6} sx={{display:'flex', textAlign:'center', alignItems:'center'}}>
              <Typography variant='caption'>Kural İhlali:{item.ruleViolation}</Typography>
              <Typography variant='caption'>Ödenen Ceza:{item.ruleViolation}</Typography>      
              </Grid>
          </Grid>
          <Grid item xs={12} mb={3}>
              <Divider orientation='horizontal' variant='fullWidth'></Divider>
              </Grid>
      </Grid>
    ))}
    
    </>
  )
}
