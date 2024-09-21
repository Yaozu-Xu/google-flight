import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { FormControl } from '@mui/material'
import { ports } from '../api/mock'
import styled from '@emotion/styled'

const StyledSearchWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FlightSearch = () => {
  const fromPort = ports.data.map((_) => {
    return {
      title: _.presentation.suggestionTitle,
    }
  })

  return (
    <StyledSearchWrapper>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Autocomplete
          options={fromPort}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Autocomplete
          options={fromPort}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="To" />}
        />
      </FormControl>
    </StyledSearchWrapper>
  )
}
