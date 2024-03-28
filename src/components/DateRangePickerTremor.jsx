import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
export default function ResponsivePickers({ label,sxMobileDatePicker }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'DesktopDatePicker', 'MobileDatePicker']}
      >
        <DemoItem label={label}>
          <MobileDatePicker defaultValue={dayjs('2022-04-17')} sx={sxMobileDatePicker} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  
  );
}