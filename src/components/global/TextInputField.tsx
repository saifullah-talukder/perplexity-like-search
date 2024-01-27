import { IconButton, InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'
import { ChangeEvent, HTMLAttributes, MouseEvent, ReactNode } from 'react'

type TextInputFieldProps = {
  label?: string
  icon?: ReactNode
  placeholder: string
  value?: string
  onTextChange?: (input: string) => void
  onIconClick?: (event: MouseEvent<HTMLElement>) => void
} & HTMLAttributes<HTMLDivElement>

export default function TextInputField(props: TextInputFieldProps) {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (props.onTextChange) {
      props.onTextChange(event.target.value)
    }
  }

  const handleIconClick = (event: MouseEvent<HTMLElement>) => {
    if (props.onIconClick) {
      props.onIconClick(event)
    }
  }

  return (
    <TextField
      label={props.label}
      variant="outlined"
      onChange={e => handleTextChange(e)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleIconClick} edge="end">
              {props.icon}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ width: '320px' }}
    />
  )
}
