import styled from '@emotion/styled'
import { FlightCard } from './FlightCard.component'
import { useEffect, useState } from 'react'
import { useFlightSearch } from '../hooks/useFlight'
import { CircularProgress } from '@mui/material'

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
  params: {
    originSkyId: string
    destinationSkyId: string
    originEntityId: string
    destinationEntityId: string
    date: string
    returnDate: string
  }
}

export const FlightList = ({ params }: FlightListProps) => {
  const [paramsReady, setParamsReady] = useState(true)
  const { flights, loading } = useFlightSearch(params)

  useEffect(() => {
    setParamsReady(true)
    for (const key in params) {
      if (params[key] === null || params[key] === '') {
        setParamsReady(false)
      }
    }
  }, [params])

  if (!paramsReady) {
    return null
  }

  if (loading) {
    return <CircularProgress color="inherit" size={20} sx={{ marginTop: '16px' }} />
  }

  if (flights.length === 0) {
    return <StyledHeader>No Flights</StyledHeader>
  }

  return (
    <StyledFlightListContainer>
      <StyledHeader>Best Departure Flights Ranked by price and convenience</StyledHeader>
      {flights.map((flight) => (
        <FlightCard flight={flight} key={flight['id']} />
      ))}
    </StyledFlightListContainer>
  )
}
