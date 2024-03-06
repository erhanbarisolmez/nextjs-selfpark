'use client'
import Card from '@mui/joy/Card';
import { useTheme } from 'next-themes';
export default function DashboardCard() {
  
  const { cardBackgroundColor, textColor } = newFunction();
  
  return (
    <>
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        // to make the demo resizable
        resize: 'horizontal',
        overflow: 'auto',
        backgroundColor:cardBackgroundColor,
        color: textColor
       
      }}
    >
      jnj
    </Card>
    </>
  );
}


function newFunction() {
  const { resolvedTheme } = useTheme();

  const cardBackgroundColor = resolvedTheme === 'dark' ? '#A5FF9D' : '#b28e83';
  const textColor = resolvedTheme === 'dark' ? '#ab003c' : '#f3f6cf';
  return { cardBackgroundColor, textColor };
}

