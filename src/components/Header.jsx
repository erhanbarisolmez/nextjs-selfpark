'use client'
import { TranslateAndTheme } from "@/components/TranslateAndTheme";
import { useThemeHook } from "@/hooks/useThemeHook";
import { usePathname } from "@/navigation";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import TextsmsIcon from '@mui/icons-material/TextsmsOutlined';
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import DrawerMobileNavigation from "./DrawerMobileNavigation";
const menu = [
  { name: "Parking Management", href: "/" },
  { name: "Personnel Management", href: "/ " },
  { name: "Customer Management", href: "/ " },
  { name: "Reports", href: "/ " }
]
const Header = ({ translateOptions, locale }) => {
  const pathname = usePathname();
  const { getThemeStyles } = useThemeHook();
  const { backgroundColor, textColor, logo, headerBorderBottom } = getThemeStyles();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Grid container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderBottom: `5px solid ${headerBorderBottom}`,
      backgroundColor: backgroundColor,
      color: textColor,



      alignContent: 'center',
      height: '150px'

    }}>
      <Container maxWidth="xll">


        <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Image
            src={logo}
            width={290}
            height={100}
            alt="Self Park Logo"
            priority={true}
            display="flex"

          />
        </Grid>

        <Grid item xs={12} sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems:'center',
          alignContent:'center'
        }}>

          {innerWidth < 500 && (
            <Grid item xs>
              <DrawerMobileNavigation buttonColor={textColor} />
            </Grid>
          )}
          

          {innerWidth >500 &&(
          <Box sx={{display:'contents'}}>
          {pathname !== "/login" && menu.map((item, key) => (
            <Typography key={key} variant="body2" sx={{
              display: 'flex',
              fontSize: {
                lg: "16px",
                md: "14px",
                sm: "12px",
                xs: "10px"
              },
              textAlign: 'center',
              alignItems: 'center'
            }}>
              {item.name}
            </Typography>
          ))}
          </Box>
          )}

        </Grid>

        <Grid item xs sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          color: textColor,
          flexDirection: 'row',
          gap: 1
        }}>

          <TranslateAndTheme translateOptions={translateOptions} locale={locale} />
          {pathname !== "/login" && (
            <>
              <NotificationsIcon sx={{ fontSize: '24px' }} />
              <TextsmsIcon sx={{ fontSize: '24px' }} />
              <Link href="/"><LogoutOutlinedIcon sx={{ fontSize: '24px' }} /></Link>

            </>
          )}

        </Grid>


      </Container>

    </Grid>



  )
}

export default Header