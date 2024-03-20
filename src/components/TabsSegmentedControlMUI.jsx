import Tab, { tabClasses } from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import TabPanel from "@mui/joy/TabPanel";
import Tabs from '@mui/joy/Tabs';

export default function TabsSegmentedControls({
  tab1,
  tab2,
  tab3,
  tabPanel1,
  tabPanel2,
  tabPanel3
}) {
  return (
    <Tabs aria-label="tabs" defaultValue={1} sx={{display:'flex' }}>
      
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
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
        justifyItems:'center'
        }}
      >
        {/* <Tab disableIndicator>{Add Park}</Tab>
        <Tab disableIndicator>List Park</Tab>
        <Tab disableIndicator>Update Park</Tab> */}
        <Tab disableIndicator>{tab1}</Tab>
        <Tab disableIndicator>{tab2}</Tab>
        <Tab disableIndicator>{tab3}</Tab>
      </TabList>

      <TabPanel value={0}>
          {tabPanel1}
      </TabPanel>

      <TabPanel value={1}>
         {tabPanel2}
      </TabPanel>

      <TabPanel value={2}>
          {tabPanel3}
      </TabPanel>

     
    </Tabs>
  );
}
