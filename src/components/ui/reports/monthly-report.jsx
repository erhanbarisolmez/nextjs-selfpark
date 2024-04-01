import CardComponent from '@/components/CardComponent'
import { useThemeHook } from '@/hooks/useThemeHook'
import { Grid, Typography } from "@mui/material"
import { LongTermParkingUsers } from '../dashboard/most-average-long-term-parking-users'
import { MostParkingPlates } from '../dashboard/most-parking-plates'
import { UsersWTMViolations } from '../dashboard/users-with-the-most-violations'

export const MonthlyReport = () => {
  const { getModalStyles } = useThemeHook();
  const { modalCard, textColor } = getModalStyles();
  return (
    <Grid container spacing={2} gap={2}>
      <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>

        <CardComponent sx={{ backgroundColor: modalCard, color: textColor }}>
          <Typography fontWeight={600}>Monthly Most Parking Plates</Typography>
          < MostParkingPlates />
        </CardComponent>

        <CardComponent sx={{ backgroundColor: modalCard, color: textColor }}>
          <Typography fontWeight={600}>Monthly Users With The Most Violations</Typography>
          <UsersWTMViolations />
        </CardComponent>

        <CardComponent sx={{ backgroundColor: modalCard, color: textColor }}>
          <Typography fontWeight={600}>Most Average Long-Term Parking Users</Typography>
          <LongTermParkingUsers />
        </CardComponent>

      </Grid>
    </Grid>
  )
}
