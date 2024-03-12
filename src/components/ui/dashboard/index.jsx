'use client'
import CardComponent from "@/components/CardComponent";
import { useThemeHook } from "@/hooks/useThemeHook";
import { Container, Grid } from "@mui/material";
const DashboardUI = () => {
  const { getThemeStyles } = useThemeHook();
  const { backgroundColor, buttonColor, isDarkMode, lefColorBg, linkColor, logoColor, textColor, whiteColor } = getThemeStyles();
  return (
    <>
      <Container maxWidth={"xll"}>
        {/* Otopark Sayısı */}
        <Grid container sx={{
          display: 'flex',
          justifyContent: 'space-between',


        }}>
          <Grid item xs={12} md={1} sx={{
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor:'lightblue',
            backgroundImage: `/images/car.png`
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
          </Grid>

          {/* Content data */}
          <Grid item xs={12} md={9}
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
          
          </Grid>


          {/* Giriş çıkış istatistik */}
          <Grid item xs={12} md={1} sx={{
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
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default DashboardUI