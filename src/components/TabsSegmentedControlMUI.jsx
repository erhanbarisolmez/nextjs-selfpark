import { useThemeHook } from '@/hooks/useThemeHook';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import TabPanel from "@mui/joy/TabPanel";
import Tabs from '@mui/joy/Tabs';
import { Box } from "@mui/material";
export default function TabsSegmentedControls({
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tabPanel1,
  tabPanel2,
  tabPanel3,
  tabPanel4,
  tabPanel5,
  defaultValue
}) {
  const { getModalStyles } = useThemeHook();
  const { modalDialogBackground, textColor, tabMenuBackground } = getModalStyles();
  return (
    <Tabs aria-label="tabs" defaultValue={defaultValue} sx={{ display: 'flex', backgroundColor: modalDialogBackground }}>

      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
          bgcolor: 'background.level1',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'background.surface',
          },
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          
        }}
      >
        
        {tab1 &&(<Tab disableIndicator>{tab1}</Tab>)}
        {tab2 &&(<Tab disableIndicator>{tab2}</Tab>)}
        {tab3 &&(<Tab disableIndicator>{tab3}</Tab>)}
        {tab4 &&(<Tab disableIndicator>{tab4}</Tab>)}
        {tab5 &&(<Tab disableIndicator>{tab5}</Tab>)}
      </TabList>

      {/* Tab Content */}
      <Box sx={{ backgroundColor: modalDialogBackground, }}>
        <TabPanel value={0}>
          {tabPanel1}
        </TabPanel>

        <TabPanel value={1}>
          {tabPanel2}
        </TabPanel>

        <TabPanel value={2}>
          {tabPanel3}
        </TabPanel>
        <TabPanel value={3}>
          {tabPanel4}
        </TabPanel>
        <TabPanel value={4}>
          {tabPanel5}
        </TabPanel>
      </Box>
    </Tabs>
  );
}
