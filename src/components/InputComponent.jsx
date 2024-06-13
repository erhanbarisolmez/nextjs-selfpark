'use client'
import { Input } from "@mui/joy"
const InputComponent = ({
  placeholder,
  value,
  variant,
  onChange,
  sx,
  ...props
}) => {
  return (
    <Input
      placeholder={placeholder}
      variant={variant || 'soft'}
      value={value}
      onChange={onChange}
      sx={sx}      
      {...props}
    />
  )
}

export default InputComponent