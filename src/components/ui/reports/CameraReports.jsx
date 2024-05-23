import CardComponent from '@/components/CardComponent'
import { ReactCamera } from '@/components/ReactCamera'
import { Grid, Typography} from '@mui/material'
import React from 'react'

const CameraReports = () => {
  return (
    <Grid container spacing={2} gap={2} >
      <Grid item xs={12} sx={{ mt: 3, gap: 2, display: 'flex', flexDirection: 'column' }}>
          <CardComponent>
          <Typography fontWeight={600}>Device Camera</Typography>
          <ReactCamera />
          </CardComponent>
      </Grid>
    </Grid>
  )
}

export default CameraReports