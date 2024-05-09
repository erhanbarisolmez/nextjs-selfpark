import CardComponent from '@/components/CardComponent';
import InfoCardModal from '@/components/InfoCardModal';
import InputComponent from '@/components/InputComponent';
import { useThemeHook } from '@/hooks/useThemeHook';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container, Divider, Grid, Typography } from "@mui/material";

export function ListContent({
  setSearch,
  filterList,
  column1,
  column2,
  column3,
  column4,
  row1,
  row2,
  row3,
  row4,
  infoCardHeader,
  propertiesShow,
  propertiesName,
  deleteOnClick,
  handleSaveClick
}) {
  const {getModalStyles} = useThemeHook();
  const {modalCard, textColor, dividerBackgroundColor} = getModalStyles();

  function _searchText(setSearch) {
    return <Grid item xs={12}>
      <InputComponent
        onChange={(e) => setSearch(e.target.value)}
        placeholder={'Search Park'}
        endDecorator={<SearchOutlinedIcon color='red' fontSize='12px' />} />
    </Grid>;
  }
  
  return <CardComponent sx={{
    display: 'flex',
    p: {
      xs:0,
      sm:3
    },
    backgroundColor:modalCard,
    color:textColor
  }}>
    <Container>
      <Grid container spacing={2}>
        {/*Search */}
        {_searchText(setSearch)}
        <Grid item container xs={12} sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/*List Column */}
          {_column(column1, column2, column3, column4)}
          {filterList && filterList.map((item, index) => (
            <>
              <Grid container key={index} sx={{ mt: 1 }}>
                <Grid item xs={12}><Divider orientation='horizontal' variant='fullWidth' sx={{backgroundColor:dividerBackgroundColor}}></Divider></Grid>
                {/*List Row */}
                {_row(index, item, row1, row2, row3, row4)}
                <Grid item xs={1} sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
                  <InfoCardModal
                    buttonIcon={<InfoOutlinedIcon />}
                    header={`${item[infoCardHeader]}'s Information`}
                    data={item}
                    propertiesShow={propertiesShow}
                    propertiesName={propertiesName}
                    deleteOnClick={deleteOnClick}
                    handleSaveClick={handleSaveClick}
                  />
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Container>
  </CardComponent>;

  function _row(index, item, row1, row2, row3, row4) {
    return <Grid item xs={11} key={index} sx={{ display: 'flex', p: 1, alignItems: 'center' }}>
      <Grid item xs sx={{ display: 'flex', alignItems: 'center', }}>
        <Grid item xs={3}> <Typography>{item[row1]}</Typography></Grid>
        <Grid item xs={3} sx={{ ml: 2 }}> <Typography>{item[row2]}</Typography></Grid>
        <Grid item xs={3} sx={{ ml: 2 }}> <Typography>{item[row3]}</Typography></Grid>
        <Grid item xs={3} sx={{ ml: 2 }}> <Typography>{item[row4]}</Typography></Grid>
      </Grid>
    </Grid>;
  }

  function _column(column1, column2, column3, column4) {
    return <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Grid item xs={3}>
        <Typography variant='subtitle2' fontWeight={600}>{column1}</Typography>
      </Grid>

      <Grid item xs={3} sx={{ display: 'flex' }} justifyContent={'flex-start'}>
        <Typography variant='subtitle2' fontWeight={600}>{column2}</Typography>
      </Grid>

      <Grid item xs={3} sx={{ display: 'flex' }} justifyContent={'flex-end'}>
        <Typography variant='subtitle2' fontWeight={600}>{column3}</Typography>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex' }} justifyContent={'flex-end'}>
        <Typography variant='subtitle2' fontWeight={600}>{column4}</Typography>
      </Grid>
    </Grid>;
  }
}

