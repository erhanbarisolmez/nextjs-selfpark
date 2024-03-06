import LoginUI from '@/components/ui/login';
import { Grid } from '@mui/joy';
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations();
  return (
    <>
      <Grid
        container spacing={2}
        sx={{
          display:'flex',
          justifyContent:'center',
          alignContent:'center',
          alignItems:'center',
  
     
        }}
      >
  
        <LoginUI />
        
      </Grid>

    


    </>
  )
}

export default LoginPage


