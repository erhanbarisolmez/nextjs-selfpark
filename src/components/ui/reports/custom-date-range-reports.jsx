import CardComponent from "@/components/CardComponent"
import ResponsivePickers from "@/components/DateRangePickerTremor"
import { Grid}  from '@mui/material'
import { BestUsers } from "../dashboard/best-users"
import { MostParkingPlates } from "../dashboard/most-parking-plates"

export const CustomDateRangeReport = () => {
  return (
    <>
      <Grid item  xs={12}>

        <CardComponent children={
          <Grid container item xs={12} lg={12} sx={{
            display: 'flex',
            flexDirection: {
              xs: "column",
              md: "row"
            },
            mt:3

          }}>
            <Grid item xs={12} lg={6}>
              <ResponsivePickers label={"DATE"} />
            </Grid>

            <Grid item xs={12} lg={6}>
              <ResponsivePickers label={"DATE"} />
            </Grid>

          </Grid>
        }>

        </CardComponent>

        <Grid item xs={12} sx={{
          display: 'flex',
          flexDirection: {
            xs: "column",
            md: "row"
          },
          justifyContent: 'space-around',
          alignItems: 'center',
          my:6

        }}>
          <Grid item xs={12} lg={6}>
            <BestUsers />
          </Grid>

          <Grid item xs={12} lg={6}>
            <MostParkingPlates />
          </Grid>

        </Grid>

      </Grid>

    </>

  )
}
