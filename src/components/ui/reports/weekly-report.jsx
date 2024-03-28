import CardComponent from '@/components/CardComponent'
import { useThemeHook } from '@/hooks/useThemeHook'
import { Grid, Typography } from "@mui/material"
import { AreaChartTremor } from '../chart/AreaChartTremor'
import { BarChartTremor } from '../chart/BarChartTremor'
import { BarListTremor } from '../chart/BarListTremor'
import { LineChartTremor } from '../chart/LineChartTremor'

export const WeeklyReport = () => {
  const { getModalStyles } = useThemeHook();
  const { modalDialogBackground, textColor } = getModalStyles();
  return (

    <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
      <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', width: '100%', gap: 1 }}>
        
        <CardComponent sx={{
          minWidth: {
            xs: '90%',
            sm: '60%',
            md: '40%',

          },
          backgroundColor: modalDialogBackground, color: textColor
        }}>
          <Typography fontWeight={600}>Weekly Area Chart</Typography>
          <AreaChartTremor />
        </CardComponent>


        <CardComponent sx={{
          minWidth: {
            xs: '90%',
            sm: '60%',
            md: '40%',
          },
          backgroundColor: modalDialogBackground, color: textColor

        }}>
          <Typography fontWeight={600}>Weekly Bar Chart</Typography>
          <BarChartTremor />
        </CardComponent>
      </Grid>

      <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', width: '100%', gap: 1 }}>
        <CardComponent sx={{
          minWidth: {
            xs: '90%',
            sm: '60%',
            md: '40%',
          },
          backgroundColor: modalDialogBackground, color: textColor

        }}>
          <Typography fontWeight={600}>Weekly Bar List</Typography>
          <BarListTremor />
        </CardComponent>


        <CardComponent sx={{
          minWidth: {
            xs: '90%',
            sm: '60%',
            md: '40%',
          },
          backgroundColor: modalDialogBackground, color: textColor

        }}>
          <Typography fontWeight={600}>Weekly Line Chart</Typography>
          <LineChartTremor />
        </CardComponent>
      </Grid>

    </Grid >



  )
}
