import React from 'react'
import styled from '@emotion/styled'

// Refactored styles for horizontal row layout
const StyledFlightCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  min-width: 590px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  background-color: white;
`

const StyledCarrierSection = styled.div`
  display: flex;
  align-items: center;
`

const StyledCarrierLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`

const StyledFlightTimes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 16px;
`

const StyledFlightTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`

const StyledFlightSubtitle = styled.div`
  color: #888;
  font-size: 11px;
  margin-top: 5px;
  text-align: left;
`

const StyledFlightRoute = styled.div`
  font-size: 12px;
  color: #555;
  text-align: center;
  margin-right: 16px;
  margin-left: 16px;
`

const StyledPrice = styled.div`
  font-size: 12px;
  text-align: center;
  margin-right: 16px;
`
const StyledPriceTitle = styled.div`
  text-align: center;
  font-weight: bold;
  text-align: left;
  color: green;
`

interface Carrier {
  id: number
  logoUrl: string
  name: string
}

interface Segment {
  id: string
  origin: { name: string; displayCode: string }
  destination: { name: string; displayCode: string }
  departure: string
  arrival: string
  durationInMinutes: number
  flightNumber: string
  marketingCarrier: Carrier
}

interface Leg {
  id: string
  origin: { name: string; displayCode: string }
  destination: { name: string; displayCode: string }
  durationInMinutes: number
  departure: string
  arrival: string
  stopCount: number
  carriers: { marketing: Carrier[] }
  segments: Segment[]
}

export interface Flight {
  id: string
  price: { raw: number; formatted: string }
  legs: Leg[]
  tags: string[]
}

interface FlightCardProps {
  flight: Flight
}

export const FlightCard = ({ flight }: FlightCardProps) => {
  const leg = flight.legs[0] // Assuming one leg, modify if needed for multiple

  const generateTimeFrame = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  return (
    <StyledFlightCard>
      <StyledCarrierSection>
        <StyledCarrierLogo src={leg.carriers.marketing[0].logoUrl} alt={leg.carriers.marketing[0].name} />
      </StyledCarrierSection>
      <StyledFlightTimes>
        <StyledFlightTitle>
          {generateTimeFrame(leg.departure)}-{generateTimeFrame(leg.arrival)}+1
        </StyledFlightTitle>
        <StyledFlightSubtitle>{leg.carriers.marketing[0].name}</StyledFlightSubtitle>
      </StyledFlightTimes>
      <StyledFlightSubtitle>
        {Math.floor(leg.durationInMinutes / 60)} hours {leg.durationInMinutes % 60} minutes
      </StyledFlightSubtitle>
      <StyledFlightRoute>
        <StyledFlightTitle>
          {leg.origin.displayCode} → {leg.destination.displayCode}
        </StyledFlightTitle>
        <StyledFlightSubtitle>{leg.stopCount} stop(s)</StyledFlightSubtitle>
      </StyledFlightRoute>
      <StyledPrice>
        <StyledPriceTitle>{flight.price.formatted}</StyledPriceTitle>
        <StyledFlightSubtitle>{leg.stopCount} stop(s)</StyledFlightSubtitle>
      </StyledPrice>
    </StyledFlightCard>
  )
}
