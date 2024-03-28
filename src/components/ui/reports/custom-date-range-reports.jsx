import CardComponent from "@/components/CardComponent"
import ResponsivePickers from "@/components/DateRangePickerTremor"
import { useThemeHook } from "@/hooks/useThemeHook"
import { Grid } from '@mui/material'
import { BestUsers } from "../dashboard/best-users"
import { MostParkingPlates } from "../dashboard/most-parking-plates"

export const CustomDateRangeReport = () => {
  const { getModalStyles } = useThemeHook();
  const { modalDialogBackground, textColor, textFieldMobileDatePicker} = getModalStyles();

  return (

    <Grid item xs={12} sx={{ backgroundColor: modalDialogBackground, color: textColor }}>

      <CardComponent
        sx={{ backgroundColor: modalDialogBackground, color: textColor }}
        children={
          <Grid container item xs={12} lg={12} sx={{
            display: 'flex',
            flexDirection: {
              xs: "column",
              md: "row"
            },
            my: 3,
            alignContent:'center',
            alignItems:'center'
          }}>
            <Grid item xs={12} lg={6}  sx={{ backgroundColor: modalDialogBackground, color: textColor }}>
              <ResponsivePickers label={"DATE"} sxMobileDatePicker={{backgroundColor:textFieldMobileDatePicker}}/>
            </Grid>

            <Grid item xs={12} lg={6}>
              <ResponsivePickers label={"DATE"} sxMobileDatePicker={{backgroundColor:textFieldMobileDatePicker}}/>
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
        my: 6

      }}>
        <Grid item xs={12} lg={6}>
          <BestUsers />
        </Grid>

        <Grid item xs={12} lg={6}>
          <MostParkingPlates />
        </Grid>

      </Grid>

    </Grid>



  )
}
