'use client'
import { Grid } from "@mui/material"
import NavbarNextUI from "./NavbarNextUI"
const Header = () => {
  return (
    <>
                <NavbarNextUI />


      <Grid container >
        <Grid item sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          width: '100vw',
          backgroundColor: 'palegoldenrod'
        }}>
          <Grid item>
          </Grid>
        
          <Grid item sx={{}}>
            <div style={{ textAlign: 'center', flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
             .
            </div>
          </Grid>
        </Grid>
      </Grid>


    </>
  )
}

export default Header