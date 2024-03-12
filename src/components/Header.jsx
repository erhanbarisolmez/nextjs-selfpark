'use client'
import { TranslateAndTheme } from "@/components/TranslateAndTheme";
import { useThemeHook } from "@/hooks/useThemeHook";
import { usePathname } from "@/navigation";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import TextsmsIcon from '@mui/icons-material/TextsmsOutlined';
import { Container, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import DrawerMobileNavigation from "./DrawerMobileNavigation";
const menu = [
  { name: "Parking Management", href: "/" },
  { name: "Personnel Management", href: "/ " },
  { name: "Customer Management", href: "/ " },
  { name: "Reports", href: "/ " }
]
const Header = ({ translateOptions }) => {
  const pathname = usePathname();
  const {getThemeStyles} = useThemeHook();
  const {backgroundColor, textColor} = getThemeStyles();
  return (
    <>
      <Grid  xs={12} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderBottom: `5px solid palegoldenrod`,
        backgroundColor:backgroundColor,
        color:textColor
     
      }}>
        <Container maxWidth="xll">
          <Grid container spacing={2} sx={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            height:'200px'
          }}>
            <Grid item xs={12} lg={2} >
              <Image
                src="/images/selfparklogo.png"
                width={250}
                height={50}
                alt="Self Park Logo"
                priority={true}
                display="flex"

              />
            </Grid>
            <Grid item xs={8} sx={{
              display: 'flex',
              gap: 2
            }}>
              <DrawerMobileNavigation />
              {pathname !== "/login" && menu.map((item) => (
                <Typography key={item.id} variant="body2" sx={{
                  display: 'flex',
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "10px"
                  },
                  textAlign:'center',
                  alignItems:'center'
                }}>
                  {item.name}
                </Typography>
              ))}
            </Grid>

            <Grid item xs sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems:'center',
              color: 'text.secondary',
              flexDirection:'row',
              gap:1
            }}>
              
              <TranslateAndTheme translateOptions={translateOptions} />
              {pathname !== "/login" &&(
                <>
              <NotificationsIcon sx={{fontSize:'28px'}}/>
              <TextsmsIcon sx={{fontSize:'28px'}} />
              <Link href="/"><LogoutOutlinedIcon sx={{fontSize:'28px'}} /></Link>

              </>
              )}

            </Grid>
          </Grid>

        </Container>

      </Grid>


    </>
  )
}

export default Header