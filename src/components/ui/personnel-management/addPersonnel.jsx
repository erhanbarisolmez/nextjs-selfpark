import { ButtonComponent } from '@/components/ButtonComponent'
import CardComponent from '@/components/CardComponent'
import InputComponent from '@/components/InputComponent'
import { useThemeHook } from '@/hooks/useThemeHook'
import { Container, Grid } from "@mui/material"
const AddPersonnel = () => {
  const { getModalStyles } = useThemeHook();
  const { infoCardButton, modalDialogBackground, textColor, modalCloseButton } = getModalStyles();
  return (
    <CardComponent sx={{backgroundColor:modalDialogBackground}} children={
      <Container>

        <Grid container spacing={2} sx={{backgroundColor:modalDialogBackground}}>
          <Grid item xs={12} >
            <Container>
              <InputComponent placeholder={'First Name'} />
              <InputComponent placeholder={'Last Name'} />
              <InputComponent placeholder={'Phone'} />
              <InputComponent placeholder={'E-mail'} />
              <InputComponent placeholder={'Street/Cad.'} />
              <InputComponent placeholder={'District'} />
              <InputComponent placeholder={'City'} />
              <InputComponent placeholder={'Building Number'} />
              <InputComponent placeholder={'Apartment Number'} />
              <InputComponent placeholder={'Password'} />
              <InputComponent placeholder={'Education'} />
            </Container>
          </Grid>
          <Grid xs sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            <ButtonComponent
              text={"KAYDET"}
              color={"neutral"}

            />
          </Grid>
        </Grid>
      </Container>
    } />


  )
}

export default AddPersonnel