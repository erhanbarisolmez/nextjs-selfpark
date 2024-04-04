'use client'
import Button from "@mui/joy/Button";

export const ButtonComponent = ({
  sx,
  type,
  text,
  onClick,
  color,
  props
}) => {
  return (
    <Button
    type={type}
    color={color}
    onClick={onClick}
    variant="soft"
    sx={
      sx
    }
    {...props}
  >
    {text}
  </Button>

  )
}

