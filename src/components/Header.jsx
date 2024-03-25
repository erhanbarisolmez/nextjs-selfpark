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
import Tooltip from "./Tooltip";
import { ListCustomerContent } from "./ui/customer-management/listCustomerContent";
import Map from "./ui/parking-management/Map";
import { ListParkContent } from "./ui/parking-management/listParkContent";
import AddPersonnel from "./ui/personnel-management/addPersonnel";
import { ListPersonnelContent } from "./ui/personnel-management/listPersonnelContent";
import InsetDriver from "./ui/messages/InsetDriver";
import { DailyReport } from "./ui/reports/daily-report";
import { WeeklyReport } from "./ui/reports/weekly-report";
import { MonthlyReport } from "./ui/reports/monthly-report";
import { CustomDateRangeReport } from "./ui/reports/custom-date-range-reports";

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
          tab2={"Weekly Report"}
          tab3={"Monthly Report"}
          tab4={"Custom Date Range Reports"}
          tabPanel1={<DailyReport />}
          tabPanel2={<WeeklyReport />}
          tabPanel3={<MonthlyReport />}
          tabPanel4={<CustomDateRangeReport />}
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
                titleIcon={<InsetDriver sx={{ cursor: 'pointer' }} />}
                title={"Private Message from John Doe"}
                message="Hi"
              />

              <Link href="/"><LogoutOutlinedIcon sx={{ fontSize: '26px', cursor: "pointer" }} /></Link>

            </>
          )}

        </Grid>
      </Container>
    </Grid>



  )
}

export default Header