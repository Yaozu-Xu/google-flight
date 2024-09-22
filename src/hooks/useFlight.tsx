import { useState, useEffect } from 'react'
import { API_KEY } from '../constant'

export const useFlightSearch = ({
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  date,
  returnDate,
  cabinClass = 'economy',
  adults = 1,
  sortBy = 'best',
  limit = 10,
  currency = 'USD',
  market = 'en-US',
  countryCode = 'US',
}) => {
  const [flights, setFlights] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true)
      setError(null)

      const url = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&originEntityId=${originEntityId}&destinationEntityId=${destinationEntityId}&date=${date}&returnDate=${returnDate}&cabinClass=${cabinClass}&adults=${adults}&sortBy=${sortBy}&limit=${limit}&currency=${currency}&market=${market}&countryCode=${countryCode}`

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Mock-Response': '1',
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
          },
        })

        if (!response.ok) {
          throw new Error('Error fetching flight data')
        }

        const data = await response.json()
        setFlights(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFlights()
  }, [
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    date,
    returnDate,
    cabinClass,
    adults,
    sortBy,
    limit,
    currency,
    market,
    countryCode,
  ])

  return { flights, loading, error }
}
