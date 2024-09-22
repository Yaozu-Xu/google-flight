import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { CircularProgress, FormControl } from '@mui/material'
import styled from '@emotion/styled'
import useNearbyAirports from '../hooks/useNearbyAirports'
import useSearchAirports from '../hooks/searchAirports'
import { useDebounce } from '../hooks/useDebounce'

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
  const [toAirport, setToAirport] = useState<string>('')
  const debouncedToAirport = useDebounce(toAirport, 400)
  const { airports: fromAirports, loading: fromLoading } = useNearbyAirports({
    lat: 19.242218017578125,
    lng: 72.85846156046128,
    locale: 'en-US',
  })

  const { airports: toAirports, loading: toLoading } = useSearchAirports({ query: debouncedToAirport, locale: 'en-US' })

  return (
    <StyledSearchWrapper>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Autocomplete
          options={fromAirports || []}
          loading={fromLoading}
          getOptionLabel={(option: any) => option?.title || ''}
          sx={{ width: 300 }}
          noOptionsText={fromLoading ? 'Loading airports...' : 'No options'}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {fromLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Autocomplete
          options={toAirports || []}
          getOptionLabel={(option: any) => option.title}
          noOptionsText={toLoading ? 'Loading airports...' : 'No options'}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              onChange={(e: any) => {
                setToAirport(e.target?.value)
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {toLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </FormControl>
    </StyledSearchWrapper>
  )
}
