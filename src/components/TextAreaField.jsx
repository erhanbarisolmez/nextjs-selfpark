import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';

export default function TextareaField({
  label,
  placeholder,
  helperText
}) {
  return (
    <FormControl>
      <FormLabel >{label}</FormLabel>
      <Textarea placeholder={placeholder} minRows={2} variant='soft' />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}