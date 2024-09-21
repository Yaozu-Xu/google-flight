import styled from '@emotion/styled'
import { Flight, FlightCard } from './FlightCard.component'

const StyledFlightListContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

const StyledHeader = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`
interface FlightListProps {
  flights: Flight[]
}

export const FlightList = ({ flights }: FlightListProps) => {
  if (flights?.length === 0) {
    return <div>No Flights</div>
  }
  return (
    <StyledFlightListContainer>
      <StyledHeader>Best Departure Flights Ranked by price and convenience</StyledHeader>
      {flights.map((flight) => (
        <FlightCard flight={flight} />
      ))}
    </StyledFlightListContainer>
  )
}
