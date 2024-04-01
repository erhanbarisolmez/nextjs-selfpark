'use client'
import { useThemeHook } from "@/hooks/useThemeHook"
import { Face6 as ManIcon, Face4 as WomanIcon } from "@mui/icons-material"
import { Grid, Box } from '@mui/material'
import Divider from "@mui/material/Divider"
import Typography from '@mui/material/Typography'

const bestUsers = [
  { id: '1', image: <ManIcon />, name: 'Ahmet', total: '100' },
  { id: '2', image: <WomanIcon />, name: 'Ayşe', total: '90' },
  { id: '3', image: <WomanIcon />, name: 'Arzu', total: '30' },
  { id: '4', image: <WomanIcon />, name: 'Arzu', total: '30' },
  { id: '5', image: <WomanIcon />, name: 'Arzu', total: '30' },
  { id: '6', image: <WomanIcon />, name: 'Arzu', total: '30' },

]

export const BestUsers = () => {
  const {getModalStyles} = useThemeHook();
  const {dividerBackgroundColor} = getModalStyles();
  return (
    <>
      {bestUsers.map((item, index) => (
        <Grid container key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
          <Grid item xs="12" alignItems={'center'} sx={{ display: 'flex', flexDirection: 'row', minWidth: 100 }}>
            {item.image}
            <Grid item xs={5} sx={{ alignItems: 'center', textAlign: 'center' }}><Typography variant='subtitle2'>{item.name}</Typography></Grid>
            <Typography key={index} variant="caption" >Toplam Kullanım:{item.total}</Typography>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Divider orientation="horizontal" variant="fullWidth" sx={{backgroundColor:dividerBackgroundColor}}/>
          </Grid>
        </Grid>
      ))}
    </>
  )
}
