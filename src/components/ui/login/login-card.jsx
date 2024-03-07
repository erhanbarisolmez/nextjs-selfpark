'use client'
import InputComponent from '@/components/InputComponent';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/material';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function LoginCard() {
  const { cardBackgroundColor, textColor, logoColor, lefColorBg} = newFunction();

  return (
    <>
      <Card
        size="lg"
        variant="solid"
        orientation="horizontal"
        sx={{
          textAlign: 'center',
          maxWidth: '100%',
          width: 800,
          // to make the demo resizable
          resize: 'vertical',
          overflow: 'auto',
          color:textColor,
          backgroundColor:cardBackgroundColor
        }}
      >
        <CardOverflow
          variant="solid"
          sx={{
            flex: '0 0 200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: 'var(--Card-padding)',
            backgroundColor:lefColorBg

          }}
        >
        
          LOGIN
        </CardOverflow>

        <CardContent sx={{ gap: 1.5, minWidth: 200,}}>
          <Grid  sx={{
            color:logoColor
          }} >
              SELF PARK

            <InputComponent
              variant={'outlined'}
            />

            <InputComponent
              variant={'outlined'}
            />
          </Grid>

               {/* LOGIN BUTTON */}
               <Button
            variant="outlined"
            color="primary"
            sx={{
              '--variant-borderWidth': '2px',
              borderRadius: 40,
              borderColor: 'primary.500',
              mx: 'auto',
            }}
          >
            Login
          </Button>

          <CardContent sx={{color:textColor}}>
            <Typography level="title-lg" color={textColor}>Not Registered?</Typography>
            <Typography fontSize="sm" sx={{ mt: 0.5, color:textColor }}>
              <Link href="dashboard">Register</Link>
            </Typography>

          </CardContent>
          
     

        </CardContent>
      </Card>
    </>
  );
}


function newFunction() {
  const { resolvedTheme } = useTheme();


  const lefColorBg = resolvedTheme === 'dark' ? '#212529' : '#212529S';
  const cardBackgroundColor = resolvedTheme === 'dark' ? '#292e32' : "#f3f6f9"
 
  const textColor = resolvedTheme === 'dark' ? '#f3f6f9' : '#332D2F';
  const logoColor = resolvedTheme === 'dark' ? '#f3f6f9' : '#332D2F';
  
  return { cardBackgroundColor, textColor, logoColor, lefColorBg };
}
