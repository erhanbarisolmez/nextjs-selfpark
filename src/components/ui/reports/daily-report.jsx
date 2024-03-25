import CardComponent from '@/components/CardComponent'
import { Box, Container, Grid } from "@mui/material"
import { AreaChartTremor } from '../chart/AreaChartTremor'
import { BarChartTremor } from '../chart/BarChartTremor'
import { BarListTremor } from '../chart/BarListTremor'
import { LineChartTremor } from '../chart/LineChartTremor'
export const DailyReport = () => {
  return (
    <CardComponent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space',
   
        }}>
        <Container maxWidth='lg'>
          <Grid container spacing={2} gap={2}>
            <Container>
              <Grid item xs={12} sx={{mt:3, gap:2, display:'flex', flexDirection:'column' }}>
                <CardComponent>
                <AreaChartTremor  />
                </CardComponent>
                <CardComponent>
                <BarChartTremor />
                </CardComponent>
                <CardComponent>
                <BarListTremor />
                </CardComponent>
                <CardComponent>
                <LineChartTremor />
                </CardComponent>
              </Grid>
            </Container>
          </Grid>

        </Container>
      </Box>
    </CardComponent >
  )
}
