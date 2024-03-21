'use client'
import Button from "@mui/joy/Button";

export const ButtonComponent = ({
  sx,
  text,
  onClick,
  color,
  props
}) => {
  return (
    <Button
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

