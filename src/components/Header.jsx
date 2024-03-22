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
import ModalMUI from "./ModalMUI";
import TabsSegmentedControls from "./TabsSegmentedControlMUI";
import Map from "./ui/parking-management/Map";
import { ListParkContent } from "./ui/parking-management/listParkContent";
import { ListPersonnelContent } from "./ui/personnel-management/listPersonnelContent";
import AddPersonnel from "./ui/personnel-management/addPersonnel";
import { ListCustomerContent } from "./ui/customer-management/listCustomerContent";
const menu = [
  { name: "Parking Management", href: "/" },
  { name: "Personnel Management", href: "/ " },
  { name: "Customer Management", href: "/ " },
  { name: "Reports", href: "/ " }
];
const modal = [
  {
    menu: <ModalMUI
      menu={"Parking Management"}
      dialogTitle={"Parking Management"}
      tabsSegmentedControls={
        <TabsSegmentedControls
          tab1={"Add Park"}
          tab2={"List Park"}
          tab3={"Update Park"}
          tabPanel1={<Map />}
          tabPanel2={<ListParkContent />}
          tabPanel3={"Tab panel #3"}
        />
      } />
  },
  {
    menu: <ModalMUI
      menu={"Personnel Management"}
      dialogTitle={"Personnel Management"}
      tabsSegmentedControls={
        <TabsSegmentedControls
          tab1={"Add Personnel"}
          tab2={"List Personnel"}
          tab3={"Update Personnel"}
          tabPanel1={<AddPersonnel />}
          tabPanel2={<ListPersonnelContent />}
          tabPanel3={"Tab panel #3 - Update Personnel"}
        />
      }
    />,
  },
  {
    menu: <ModalMUI
      menu={"Customer Management"}
      dialogTitle={"Customer Management"}
      tabsSegmentedControls={
        <TabsSegmentedControls
          tab2={"List Customer"}
          tabPanel2={<ListCustomerContent />}
        />
      }
    />,
  },
  {
    menu: <ModalMUI
      menu={"Reports"}
      dialogTitle={"Reports"}
      tabsSegmentedControls={
        <TabsSegmentedControls 
          tab1={"Daily Report"}
          tab2={"Monthly Report"}
          tab3={"Yearly Report"}
          tab4={"All Reports"}
          tabPanel1={"Report Panel #1 - Daily Report"}
          tabPanel2={"Report Panel #2 - Monthly Report"}
          tabPanel3={"Report Panel #3 - Yearly Report"}
          tabPanel4={"Report Panel #1 - All Report"}
        />
      }
    />,
  }

];
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
      height: '170px'

    }}>
      <Container maxWidth="xll">


        <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          alignItems: 'center',
          alignContent: 'center'
        }}>

          {innerWidth < 500 && (
            <Grid item xs>
              <DrawerMobileNavigation buttonColor={textColor} />
            </Grid>
          )}


          {innerWidth > 500 && (
            // <Box sx={{display:'contents'}}>
            // {pathname !== "/login" && menu.map((item, key) => (
            //   <Typography key={key} variant="body2" sx={{
            //     display: 'flex',
            //     fontSize: {
            //       lg: "16px",
            //       md: "14px",
            //       sm: "12px",
            //       xs: "10px"
            //     },
            //     textAlign: 'center',
            //     alignItems: 'center',
            //     p:1
            //   }}>
            //     {item.name}
            //   </Typography>
            // ))}
            // </Box>
            <Box sx={{ display: 'contents' }}>
              {pathname !== "/login" && modal.map((item, key) => (
                <Typography key={key} variant="body2" sx={{
                  display: 'flex',
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "10px"
                  },
                  textAlign: 'center',
                  alignItems: 'center',
                  p: 1
                }}>
                  {item.menu}
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