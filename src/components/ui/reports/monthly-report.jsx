import React from 'react'
import { Grid,Typography} from "@mui/material"
import CardComponent from '@/components/CardComponent'
import { MostParkingPlates } from '../dashboard/most-parking-plates'
import { UsersWTMViolations } from '../dashboard/users-with-the-most-violations'
import { LongTermParkingUsers } from '../dashboard/most-average-long-term-parking-users'

export const MonthlyReport = () => {
  return (
    <Grid container spacing={2} gap={2}>

    <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>


      <CardComponent>
        <Typography fontWeight={600}>Monthly Most Parking Plates</Typography>
        < MostParkingPlates />
      </CardComponent>

      <CardComponent>
        <Typography fontWeight={600}>Monthly Users With The Most Violations</Typography>
        <UsersWTMViolations />
      </CardComponent>

      <CardComponent>
        <Typography fontWeight={600}>Most Average Long-Term Parking Users</Typography>
        <LongTermParkingUsers />
      </CardComponent>




    </Grid>
  </Grid>
  )
}
