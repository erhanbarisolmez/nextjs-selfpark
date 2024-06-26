'use client'
import { TranslateAndTheme } from "@/components/TranslateAndTheme";
import { useAuth } from "@/hooks/useAuth";
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
import Tooltip from "./Tooltip";
import { ListCustomerContent } from "./ui/customer-management/listCustomerContent";
import InsetDriver from "./ui/messages/InsetDriver";
import Map from "./ui/parking-management/Map";
import { ListParkContent } from "./ui/parking-management/listParkContent";
import AddPersonnel from "./ui/personnel-management/addPersonnel";
import { ListPersonnelContent } from "./ui/personnel-management/listPersonnelContent";
import CameraReports from "./ui/reports/CameraReports";
import { CustomDateRangeReport } from "./ui/reports/custom-date-range-reports";
import { DailyReport } from "./ui/reports/daily-report";
import { MonthlyReport } from "./ui/reports/monthly-report";
import { WeeklyReport } from "./ui/reports/weekly-report";

const modalAdmin = [
  {
    menu: <ModalMUI
      menu={"Parking Management"}
      dialogTitle={"Parking Management"}
      tabsSegmentedControls={
        <TabsSegmentedControls
          tab1={"Add Park"}
          tab2={"List Park"}
          tabPanel1={<Map />}
          tabPanel2={<ListParkContent />}
          defaultValue={1}

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
          tabPanel1={<AddPersonnel />}
          tabPanel2={<ListPersonnelContent />}
          defaultValue={1}
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
          tab1={"List Customer"}
          tabPanel1={<ListCustomerContent />}
          defaultValue={0}

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
          tab2={"Weekly Report"}
          tab3={"Monthly Report"}
          tab4={"Custom Date Range Reports"}
          tab5={"Camera Report"}
          tabPanel1={<DailyReport />}
          tabPanel2={<WeeklyReport />}
          tabPanel3={<MonthlyReport />}
          tabPanel4={<CustomDateRangeReport />}
          tabPanel5={<CameraReports />}
          defaultValue={1}
        />
      }
    />
  }

];
const Header = ({ translateOptions, locale }) => {
  const pathname = usePathname();
  const { getThemeStyles } = useThemeHook();
  const { backgroundColor, textColor, logo, headerBorderBottom } = getThemeStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const { exit, token } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleLogout = () => {
    exit();
  }

  return (
    <>
     
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

              {innerWidth < 600 && pathname !== "/login" && (
                <Grid item xs>
                  <DrawerMobileNavigation buttonColor={textColor} />
                </Grid>
              )}


              {innerWidth > 500 && (

                <Box sx={{ display: 'contents' }}>

                  {pathname !== "/login" && pathname === '/dashboard' && modalAdmin.map((item, key) => (
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
              gap: 1,

            }}>

              <TranslateAndTheme translateOptions={translateOptions} locale={locale} />
              {pathname !== "/login" && (
                <>
                  <Tooltip
                    menuIcon={<NotificationsIcon sx={{ fontSize: '24px', color: textColor }} />}
                    name=" mui/material-ui"
                    date="on Feb 25"
                    system={"[system]"}
                    titleIcon={<NotificationsIcon sx={{ color: textColor }} />}
                    title={"grey is no more recognized as color with the sx prop"}
                    message="Duplicates I have searched the existing issues Latest version I have
                tested the …"
                    chip1="bug 🐛"
                    chip2="package: system"

                  />
                  <Tooltip
                    menuIcon={<TextsmsIcon sx={{ fontSize: '24px', color: textColor }} />}
                    name="@John"
                    date="on April 10"
                    system={"[user]"}
                    titleIcon={<InsetDriver />}
                    title={"Private Message from John Doe"}
                    message="Hi"
                  />

                  <Link href="/" onClick={handleLogout}><LogoutOutlinedIcon sx={{ fontSize: '26px', cursor: "pointer" }} /></Link>

                </>
              )}

            </Grid>
          </Container>
        </Grid>
     

    </>
  )
}

export default Header