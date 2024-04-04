'use client'
import { Box } from '@mui/material';
import LoginCard from './login-card';

const LoginUI = () => {

  return (
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center',
          height:'80vh'
        }}
        >
        <LoginCard />
        </Box>
    
  )
}

export default LoginUI