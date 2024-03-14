'use client'
import { Input } from "@mui/joy"
const InputComponent = ({
  placeholder,
  value,
  variant,
  onChange,
  props
}) => {
  return (
    <Input
      placeholder={placeholder}
      variant={variant || 'soft'}
      value={value}
      onChange={onChange}
      {...props}
      sx={{mt:2}}
    />
  )
}

export default InputComponent