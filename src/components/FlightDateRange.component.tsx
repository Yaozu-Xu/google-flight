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

interface FlightDateRangeProps {
  setDate: (value: string) => void
  setReturnDate: (value: string) => void
}

export const FlightDateRange = ({ setDate, setReturnDate }: FlightDateRangeProps) => {
  return (
    <StyledRangeWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <DatePicker
            label="Select a date"
            value={dayjs(dayjs().format('YYYY-MM-DD'))}
            onChange={(e, value: any) => setDate(value.format('YYYY-MM-DD'))}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <DatePicker
            label="Select a date"
            value={dayjs(dayjs().add(1, 'day').format('YYYY-MM-DD'))}
            onChange={(e, value: any) => setReturnDate(value.format('YYYY-MM-DD'))}
          />
        </FormControl>
      </LocalizationProvider>
    </StyledRangeWrapper>
  )
}
