import CardComponent from '@/components/CardComponent'
import { Box, Container, Grid, Typography } from "@mui/material"
import { AreaChartTremor } from '../chart/AreaChartTremor'
import { BarChartTremor } from '../chart/BarChartTremor'
import { BarListTremor } from '../chart/BarListTremor'
import { LineChartTremor } from '../chart/LineChartTremor'
import { MostParkingPlates } from '../dashboard/most-parking-plates'
import { UsersWTMViolations } from '../dashboard/users-with-the-most-violations'
import { LongTermParkingUsers } from '../dashboard/most-average-long-term-parking-users'

export const DailyReport = () => {
  return (

    <Grid container spacing={2} gap={2}>

      <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>

        <CardComponent>
          <Typography fontWeight={600}>Daily Bar Chart</Typography>
          <BarChartTremor />
        </CardComponent>

        <CardComponent>
          <Typography fontWeight={600}>Daily Bar List</Typography>
          <BarListTremor />
        </CardComponent>

        <CardComponent>
          <Typography fontWeight={600}>Daily Most Parking Plates</Typography>
          < MostParkingPlates />
        </CardComponent>

        <CardComponent>
          <Typography fontWeight={600}>Daily Users With The Most Violations</Typography>
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
