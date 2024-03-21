import { ButtonComponent } from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import Grid from '@mui/material/Grid';
const AddParkContent = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
      <InputComponent 
        placeholder={"Otopark Adı"}
 
      />
      </Grid>
      <Grid item xs={12}>
      <InputComponent 
        placeholder={"Kapasite"}
 
      />
      </Grid>
      <Grid item xs={12}>
      <InputComponent 
        placeholder={"Çalışma Saatleri"}
 
      />
        <Grid item xs={12}>
      <InputComponent 
        placeholder={"Ücretsiz Park Süresi"}
 
      />
      </Grid>
      <Grid item xs={12} sx={{textAlign:'center',alignContent:'center',alignItems:'center', display:'flex', justifyContent:'center', mt:2}}>
      <ButtonComponent 
       text={"KAYDET"}
       color={"neutral"}
 
      />
      </Grid>
      </Grid>
    </Grid>
  )
}

export default AddParkContent