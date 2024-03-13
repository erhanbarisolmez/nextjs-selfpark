'use client'
import { AreaChartTremor } from "@/components/AreaChartTremor";
import { BarChartTremor } from "@/components/BarChartTremor";
import { BarListTremor } from "@/components/BarListTremor";
import CardComponent from "@/components/CardComponent";
import { LineChartTremor } from "@/components/LineChartTremor";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Container, Grid } from "@mui/material";
import { BestUsers } from "../login/best-users";
const DashboardUI = () => {
  const { getThemeStyles } = useThemeHook();
  const { backgroundColor, buttonColor, isDarkMode, lefColorBg, linkColor, logoColor, textColor, whiteColor } = getThemeStyles();
  return (
    <>
      <Container maxWidth="xll">

        <Grid container spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            mt: 0.1,
            
          }}>
          {/* Otopark Sayısı */}
          {/* <Grid item xs={12} col={1} sx={{
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor:'lightblue',

          }}>

            <CardComponent
              header={"Toplam Otopark Sayısı"}
              content={
                <>5</>
              }
              sx={{
                width: 200,
                backgroundColor: backgroundColor,
                color: textColor,
                mt: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",


              }}
            />

            <CardComponent
              header={"Boş Otopark Sayısı"}
              content={
                <>5</>
              }
              sx={{
                ml: {
                  xs: 4,
                  md: 0
                },
                width: 200,
                backgroundColor: backgroundColor,
                color: textColor,
                mt: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",

              }}
            />

            <CardComponent
              header={"Dolu Otopark Sayısı"}
              content={
                <>5</>
              }
              sx={{
                ml: {
                  xs: 8,
                  md: 0
                },
                width: 200,
                backgroundColor: backgroundColor,
                color: textColor,
                mt: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",

              }}
            />
          </Grid> */}

          {/* Content data */}
          {/* <Grid item xs={12} md={9}
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              mt: 3,
            }}>
            <CardComponent 
              header={"The Best Users"}
              sx={{
                backgroundColor:backgroundColor,
                color:textColor,
                flexGrow: 1,
                height:"unset",
                p:4
              }}
            />
            <CardComponent 
              header={"Most Parking Plates"}
              sx={{
                backgroundColor:backgroundColor,
                color:textColor,
                flexGrow: 1,
                height:"unset",
                p:4
              }}
            />
            <CardComponent 
              header={"Users With The Most Violations"}
              sx={{
                backgroundColor:backgroundColor,
                color:textColor,
                flexGrow: 1,
                height:"unset",
                p:4
              }}
            />
            <CardComponent 
              header={"Most Average Long-Term Parking Users"}
              sx={{
                backgroundColor:backgroundColor,
                color:textColor,
                flexGrow: 1,
                height:"unset",
                p:4
              }}
            />
          
          </Grid> */}
          {/* <Grid  xs={12} md={10} sx={{display:'flex',mt:3,gap:1, justifyContent:'center',alignItems:'center'}}> */}
          <Grid item xs={12} md={3} >
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700 }} header={"Last 7 Days Revenue"} content={<LineChartTremor />} />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700 }} header={"Last 7 Days User Count"} content={<AreaChartTremor />
            } />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700, height: 377 }} header={"Entry Methods"} content={<BarChartTremor />
            } />
          </Grid>
          <Grid item xs={12} md={3} >
            <CardComponent sx={{ backgroundColor: backgroundColor, color: textColor, fontWeight: 700 }} header={"Last 7 Days Revenue"} content={<LineChartTremor />} />
          </Grid>
          {/* </Grid> */}


          {/* Giriş çıkış istatistik */}
          {/* <Grid item xs={12} md={1} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            // backgroundColor:'khaki'
          }}>

            <CardComponent
              header={"Bugünkü Giriş Sayısı"}
              content={
                <>5</>
              }
              sx={{

                width: 200,
                backgroundColor: backgroundColor,
                color: textColor,
                mt: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",

              }}
            />

            <CardComponent
              header={"Bugünkü Çıkış Sayısı"}
              content={
                <>5</>
              }
              sx={{
                mr: {
                  xs: 8,
                  md: 0
                },
                width: 200,
                backgroundColor: backgroundColor,
                color: textColor,
                mt: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",

              }}
            />

            <CardComponent
              header={"Gelir İstatistikleri"}
              content={
                <>5</>
              }
              sx={{
                mr: {
                  xs: 12,
                  md: 0
                },
                width: 200,
                backgroundColor: backgroundColor,
                color: textColor,
                mt: 3,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",

              }}
            />
          </Grid> */}




        </Grid>

        {/* Content data */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              mt: 3,
              flexDirection: {
                xs: "column",
                md: "row"
              },
              gap: 2,
              minHeight: 300
            }}>
            <CardComponent
              header={"The Best Users"}
              content={<BestUsers />}
              sx={{
                backgroundColor: backgroundColor,
                color: textColor,
                flexGrow: 1,
                height: "unset",
                p: 4
              }}
            />
            <CardComponent
              header={"Most Parking Plates"}
              sx={{
                backgroundColor: backgroundColor,
                color: textColor,
                flexGrow: 1,
                height: "unset",
                p: 4
              }}
            />
            <CardComponent
              header={"Users With The Most Violations"}
              sx={{
                backgroundColor: backgroundColor,
                color: textColor,
                flexGrow: 1,
                height: "unset",
                p: 4
              }}
            />
            <CardComponent
              header={"Most Average Long-Term Parking Users"}
              content={"qwewqe"}
              sx={{
                backgroundColor: backgroundColor,
                color: textColor,
                height: "unset",
                p: 4
              }}
            />

          </Grid>
          <Grid item xs={12} md={3} sx={{ mt: 1 }}>
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
                p: 4,
                fontWeight:600
              }}
            />
          </Grid>
        </Grid>



      </Container>
    </>
  )
}

export default DashboardUI