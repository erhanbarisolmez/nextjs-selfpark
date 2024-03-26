import React from 'react'
import CardComponent from '@/components/CardComponent'
import { Box, Container, Grid, Typography } from "@mui/material"
import { AreaChartTremor } from '../chart/AreaChartTremor'
import { BarChartTremor } from '../chart/BarChartTremor'
import { BarListTremor } from '../chart/BarListTremor'
import { LineChartTremor } from '../chart/LineChartTremor'

export const WeeklyReport = () => {
  return (
    <Grid container spacing={2} gap={2}>

      <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>

        <CardComponent>
          <Typography fontWeight={600}>Weekly Area Chart</Typography>
          <AreaChartTremor />
        </CardComponent>

        <CardComponent>
          <Typography fontWeight={600}>Weekly Bar Chart</Typography>
          <BarChartTremor />
        </CardComponent>

        <CardComponent>
          <Typography fontWeight={600}>Weekly Bar List</Typography>
          <BarListTremor />
        </CardComponent>

        <CardComponent>
          <Typography fontWeight={600}>Weekly Line Chart</Typography>
          <LineChartTremor />
        </CardComponent>
      </Grid>
    </Grid>


  )
}
