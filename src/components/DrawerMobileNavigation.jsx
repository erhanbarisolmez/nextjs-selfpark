'use client'
import { useThemeHook } from '@/hooks/useThemeHook';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import ModalMUI from './ModalMUI';
import TabsSegmentedControls from './TabsSegmentedControlMUI';
import { ListCustomerContent } from './ui/customer-management/listCustomerContent';
import Map from './ui/parking-management/Map';
import { ListParkContent } from './ui/parking-management/listParkContent';
import AddPersonnel from './ui/personnel-management/addPersonnel';
import { ListPersonnelContent } from './ui/personnel-management/listPersonnelContent';
import { CustomDateRangeReport } from './ui/reports/custom-date-range-reports';
import { DailyReport } from './ui/reports/daily-report';
import { MonthlyReport } from './ui/reports/monthly-report';
import { WeeklyReport } from './ui/reports/weekly-report';

export default function DrawerMobileNavigation({ buttonColor }) {
  const [open, setOpen] = React.useState(false);
  const { getThemeStyles } = useThemeHook();
  const { textColor, isDarkMode, } = getThemeStyles();
  return (
    <React.Fragment>

      <IconButton variant="outliexamplesned" sx={{ color: buttonColor }} onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)} anchor='top' variant={!isDarkMode ? 'outlined' : 'solid'}  >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,

          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer', color: textColor }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              'aria-label': 'Search anything',
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: '2px solid',
            borderColor: 'neutral.outlinedBorder',
            '&:hover': {
              borderColor: 'neutral.outlinedHoverBorder',
            },
            '&::before': {
              border: '1px solid var(--Input-focusedHighlight)',
              transform: 'scaleX(0)',
              left: 0,
              right: 0,
              bottom: '-2px',
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        />
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }}>
            <ModalMUI
              menu={"Parking Management"}
              dialogTitle={"Parking Management"}
              tabsSegmentedControls={
                <TabsSegmentedControls
                  tab1={"Add"}
                  tab2={"List"}
                  tabPanel1={<Map />}
                  tabPanel2={<ListParkContent />}
                  defaultValue={1}
                />
              } />
          </ListItemButton>
          <ListItemButton sx={{ fontWeight: 'lg' }}>
            <ModalMUI
              menu={"Personnel Management"}
              dialogTitle={"Personnel Management"}
              tabsSegmentedControls={
                <TabsSegmentedControls
                  tab1={"Add"}
                  tab2={"List"}
                  tabPanel1={<AddPersonnel />}
                  tabPanel2={<ListPersonnelContent />}
                  defaultValue={1}
                />
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ fontWeight: 'lg' }}>
            <ModalMUI
              menu={"Customer Management"}
              dialogTitle={"Customer Management"}
              tabsSegmentedControls={
                <TabsSegmentedControls
                  tab1={"List"}
                  tabPanel1={<ListCustomerContent />}
                  defaultValue={0}
                />
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ fontWeight: 'lg'}}>
            <ModalMUI
              menu={"Reports"}
              dialogTitle={"Reports"}
              tabsSegmentedControls={
                <TabsSegmentedControls
                  tab1={"Daily"}
                  tab2={"Weekly"}
                  tab3={"Monthly"}
                  tab4={"Custom Date Range"}
                  tabPanel1={<DailyReport />}
                  tabPanel2={<WeeklyReport />}
                  tabPanel3={<MonthlyReport />}
                  tabPanel4={<CustomDateRangeReport />}
                  defaultValue={1}
                />
              }
            />
          </ListItemButton>
        </List>
      </Drawer>

    </React.Fragment>
  );
}