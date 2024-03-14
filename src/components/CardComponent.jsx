'use client'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

export default function CardComponent({
  header,
  content,
  children,
  sx,
  ...props

}) {
  return (


      <Card variant="outlined"  sx={sx} {...props}>
          {header}
        <CardContent>
          {content}
        </CardContent>
        {children}
      </Card>

  
   
  );
}