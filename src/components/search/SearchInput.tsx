'use client'

import { Menu } from '@mui/material'
import { useState } from 'react'
import TextInputField from '../global/TextInputField'

export default function SearchInput() {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLDivElement) | null>(null)
  const [searchText, setSearchText] = useState('')

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div onClick={e => setAnchorEl(e.currentTarget)}>
        <TextInputField label="Ask anything" placeholder="Ask anything..." value={searchText} />
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      ></Menu>
    </div>
  )
}
