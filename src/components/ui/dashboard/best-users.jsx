'use client'
import { Face6 as ManIcon, Face4 as WomanIcon } from "@mui/icons-material"
import { Grid } from '@mui/material'
import Divider from "@mui/material/Divider"
import Typography from '@mui/material/Typography'
const bestUsers = [
  {id:'1', image: <ManIcon />, name: 'Ahmet', total: '100' },
  {id:'2', image: <WomanIcon />, name: 'Ayşe', total: '90' },
  {id:'3', image: <WomanIcon />, name: 'Arzu', total: '30' },
  {id:'4', image: <WomanIcon />, name: 'Arzu', total: '30' },
  {id:'5', image: <WomanIcon />, name: 'Arzu', total: '30' },
  {id:'6', image: <WomanIcon />, name: 'Arzu', total: '30' },

]

export const BestUsers = () => {
  return (
    <>
     {bestUsers.map((item, index) =>(
      <Grid container item xs={12} key={index} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}> 
      <Grid item xs="2" alignItems={'center'} key={index}>
        {item.image}
      </Grid>
      <Grid item xs="7" mt={3}>
       <Typography  key={index} variant="caption" >Toplam Kullanım:{item.total}</Typography>
       </Grid>
       <Grid item xs="4">
       <Typography  key={index} variant="caption">{item.name}</Typography>
       </Grid>
       <Grid item xs>
       <Divider orientation="horizontal" variant="fullWidth"   />
       </Grid>
      </Grid>
      ))}
    </>
  )
}
