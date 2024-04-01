import CardComponent from '@/components/CardComponent'
import { useThemeHook } from '@/hooks/useThemeHook'
import { Grid, Typography } from "@mui/material"
import { AreaChartTremor } from '../chart/AreaChartTremor'
import { BarChartTremor } from '../chart/BarChartTremor'
import { BarListTremor } from '../chart/BarListTremor'
import { LineChartTremor } from '../chart/LineChartTremor'

export const WeeklyReport = () => {
  const { getModalStyles } = useThemeHook();
  const {  textColor, modalCard } = getModalStyles();
  return (

    <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
      <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', width: '100%', gap: 1 }}>

        <CardComponent
          header={
            <Typography fontWeight={600} mt={2}>Weekly Area Chart</Typography>
          }
          content={
            <AreaChartTremor />
          }
          sx={{
            minWidth: {
              xs: '90%',
              sm: '60%',
              md: '40%',

            },
            backgroundColor: modalCard, color: textColor
          }}>
        </CardComponent>


        <CardComponent
          header={
            <Typography fontWeight={600}>Weekly Bar Chart</Typography>
          }
          content={
            <BarChartTremor />
          }
          sx={{
            minWidth: {
              xs: '90%',
              sm: '60%',
              md: '40%',
            },
            backgroundColor: modalCard, color: textColor

          }}>
        </CardComponent>
      </Grid>

      <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', width: '100%', gap: 1 }}>
        <CardComponent
          header={
            <Typography fontWeight={600} mt={2}>Weekly Bar List</Typography>
          }
          content={
            <BarListTremor />}
          sx={{
            minWidth: {
              xs: '90%',
              sm: '60%',
              md: '40%',
            },
            backgroundColor: modalCard, color: textColor

          }}>

        </CardComponent>


        <CardComponent
          header={
            <Typography fontWeight={600} mt={2}>Weekly Line Chart</Typography>
          }
          content={
            <LineChartTremor />}
          sx={{
            minWidth: {
              xs: '90%',
              sm: '60%',
              md: '40%',
            },
            backgroundColor: modalCard, color: textColor

          }}>

        </CardComponent>
      </Grid>

    </Grid >



  )
}
