'use client'
import { Input } from "@mui/joy"
const InputComponent = ({
  placeholder,
  value,
  variant,
  onChange,
  ...props
}) => {
  return (
    <Input
      placeholder={placeholder}
      variant={variant || 'soft'}
      value={value}
      onChange={onChange}
      sx={{mt:2}}      
      {...props}
    />
  )
}

export default InputComponent