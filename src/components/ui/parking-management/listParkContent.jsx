import CardComponent from '@/components/CardComponent';
import InfoCardModal from '@/components/InfoCardModal';
import InputComponent from '@/components/InputComponent';
import { useThemeHook } from '@/hooks/useThemeHook';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container, Divider, Grid, Typography } from "@mui/material";
const parkList = [
  {
    id: 1,
    name: 'Park A',
    capacity: 100,
    workHours: '08:30 - 20:30',
    freeParkingDuration: '2 hourse',
  },
  {
    id: 1,
    name: 'Park B',
    capacity: 200,
    workHours: '07:00 - 20:00',
    freeParkingDuration: '2 hourse',
  },
  {
    id: 1,
    name: 'Park C',
    capacity: 150,
    workHours: '24 hours',
    freeParkingDuration: '2 hourse',
  }
]

export const ListParkContent = () => {
  const { getThemeStyles } = useThemeHook();
  const { textColor, isDarkMode, buttonColor, backgroundColor } = getThemeStyles();
  return (
    <div>
      <CardComponent sx={{ display: 'flex', p: 3 }}>
        <Container>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <InputComponent
                placeholder={'Search Park'}
                endDecorator={
                  <SearchOutlinedIcon color='red' fontSize='12px' />
                }
              />
            </Grid>
            <Grid item container xs={12} sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Grid item xs={6}>
                  <Typography variant='subtitle2' fontWeight={600}>Name</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex' }} justifyContent={'flex-end'} >
                  <Typography variant='subtitle2' fontWeight={600}>Actions</Typography>
                </Grid>
              </Grid>
              {parkList.map((item, index) => (
                <>
                  <Grid container key={index.id} sx={{ mt: 2 }}>
                    <Grid xs={12}><Divider orientation='horizontal' variant='fullWidth'></Divider></Grid>
                    <Grid item xs={11} key={index.id} sx={{ display: 'flex', p: 1, }}>
                      <Grid item xs>{item.name}</Grid>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                      <Grid item xs={1} sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                        <InfoCardModal
                          buttonIcon={<InfoOutlinedIcon />}
                          header={`${item.name}'s Information`}
                          data ={item}
                        />
                      </Grid>
                      

                    </Grid>

                  </Grid>
                </>
              ))}

            </Grid>
          </Grid>
        </Container>
      </CardComponent>
    </div>
  )
}
