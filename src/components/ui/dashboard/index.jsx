'use client'
import CardComponent from "@/components/CardComponent";
import { AreaChartTremor } from "@/components/ui/chart/AreaChartTremor";
import { BarChartTremor } from "@/components/ui/chart/BarChartTremor";
import { LineChartTremor } from "@/components/ui/chart/LineChartTremor";
import { useAuth } from "@/hooks/useAuth";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Container, Grid } from "@mui/material";
import { BestUsers } from "./best-users";
import { LongTermParkingUsers } from "./most-average-long-term-parking-users";
import { MostParkingPlates } from "./most-parking-plates";
import { UsersWTMViolations } from "./users-with-the-most-violations";

const DashboardUI = () => {

  const { getThemeStyles } = useThemeHook();
  const { backgroundColor, textColor,  } = getThemeStyles();
  const {token} = useAuth();

  return (
    <>
      {token &&(
      <Container maxWidth="xll">

        {/* GRAPHICS */}
        <Grid container  spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            mt: 0.1,
            alignItems: 'center',

          }}>

          <Grid item xs={12} md={3} lg={3}>
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700 , height: 375 }} header={"Last 7 Days Revenue"} content={<LineChartTremor />} />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700, height: 375 }} header={"Last 7 Days User Count"} content={<AreaChartTremor />
            } />
          </Grid>

      
          <Grid item xs={12} md={3} lg={3}>
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700, height: 375 }} header={"Entry Methods"} content={<BarChartTremor />
            } />
          </Grid>
          {/* --- */}
          <Grid item xs={12} md={3} lg={3} >
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700, height: 375 }} header={"Users Parking Over"} content={<LineChartTremor />} />
          </Grid>

        </Grid>

        {/* Content data */}
        <Grid container spacing={2} sx={{
          display: 'flex',
          flexDirection:'row',
          flexWrap: 'wrap',
          mt:0.1,
          mb:1,
          flexDirection: {
            xs: "column",
            md: "row",
          },
          fontWeight: 600,

        }}>

            <Grid item xs={12} lg={3}>
              <CardComponent
                header="The Best Users"
                content={<><Grid item xs sx={{ display:'flex', flexDirection:'column', overflowX: 'auto', minHeight: 300, minWidth:200 }}><BestUsers /></Grid></>}
                sx={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                  height: "unset",
                  p: 3,
                  
                }}
              />
            </Grid>

            <Grid item xs={12} lg={3} >

              <CardComponent
                header={"Most Parking Plates"}
                content={<><Grid item xs sx={{display:'flex', flexDirection:'column', overflowX: 'auto', minHeight: 300,minWidth:200 }}><MostParkingPlates /></Grid></>}
                sx={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                  height: "unset",
                  p: 3
                }}
              />
            </Grid>

            
            <Grid item xs={12} lg={3}>
              <CardComponent
                header={"Users With The Most Violations"}
                content={<><Grid item xs sx={{display:'flex', flexDirection:'column', overflowX: 'auto', maxHeight: 300 }}><UsersWTMViolations /></Grid></>}
                sx={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                  height: 385,
                  p: 3
                }}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <CardComponent
                header={"Most Average Long-Term Parking Users"}
                content={<><Grid item xs sx={{ overflowX: 'auto', minHeight: 270, minWidth: 200 }}><LongTermParkingUsers /></Grid></>}
                sx={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                  height: 385,
                  p: 3
                }}
              />
            </Grid>
            {/* Park Analytics */}
            {/* <Grid item xs={12} md={2}  >
              <CardComponent
                header={
                  <>
                    <h3>Park Analytics</h3>
                    <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
                      <span>Source</span>
                      <span>Total</span>
                    </p>
                  </>
                }
                content={<BarListTremor />}
                sx={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                  height: "unset",
                  p: 3,
                  fontWeight: 600,
                  height: 385,
                  
                }}
              />
            </Grid> */}

        </Grid>
      </Container>
    )}
    </>
  )
}

export default DashboardUI