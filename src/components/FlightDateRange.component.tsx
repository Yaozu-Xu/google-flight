import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import styled from '@emotion/styled'
import { FormControl } from '@mui/material'

const StyledRangeWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const FlightDateRange = () => {
  return (
    <StyledRangeWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <DatePicker label="Select a date" value={dayjs('2022-04-17')} onChange={() => {}} />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <DatePicker label="Select a date" value={dayjs('2022-04-17')} onChange={() => {}} />
        </FormControl>
      </LocalizationProvider>
    </StyledRangeWrapper>
  )
}
