import Tab, { tabClasses } from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import TabPanel from "@mui/joy/TabPanel";
import Tabs from '@mui/joy/Tabs';

export default function TabsSegmentedControls() {
  return (
    <Tabs aria-label="tabs" defaultValue={1} sx={{display:'flex', }}>
      
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
        <Tab disableIndicator>Add Park</Tab>
        <Tab disableIndicator>List Park</Tab>
        <Tab disableIndicator>Update Park</Tab>

      </TabList>

      <TabPanel value={0}>
          Tab Panel 0
      </TabPanel>

      <TabPanel value={1}>
          Tab Panel 1
      </TabPanel>

      <TabPanel value={2}>
          Tab Panel 2
      </TabPanel>
    </Tabs>
  );
}
