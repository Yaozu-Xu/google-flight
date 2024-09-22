import { useState, useEffect } from 'react'
import { API_KEY } from '../constant'
import { nearByPorts } from '../api/mock'

const useNearbyAirports = ({ lat = 19.242218017578125, lng = 72.85846156046128, locale = 'en-US' }) => {
  const [airports, setAirports] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNearbyAirports = async () => {
      setLoading(true)
      setError(null)

      const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=${lat}&lng=${lng}&locale=${locale}`

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
          throw new Error('Error fetching nearby airports')
        }

        const res = await response.json()
        const from = res?.data?.nearby?.map((_) => {
          return {
            title: _.presentation.suggestionTitle,
            entityId: _.navigation.entityId,
            skyId: _.navigation.relevantFlightParams.skyId,
          }
        })
        setAirports(from)
      } catch (err: any) {
        // use mock data when error
        const from = nearByPorts?.data?.nearby?.map((_) => {
          return {
            title: _.presentation.suggestionTitle,
            entityId: _.navigation.entityId,
            skyId: _.navigation.relevantFlightParams.skyId,
          }
        })
        setError(err?.message)
        setAirports(from)
      } finally {
        setLoading(false)
      }
    }

    fetchNearbyAirports()
  }, [lat, lng])

  return { airports, loading, error }
}

export default useNearbyAirports
