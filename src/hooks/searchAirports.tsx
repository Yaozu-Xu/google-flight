import { useState, useEffect } from 'react'
import { API_KEY } from '../constant'
import { searchPorts } from '../api/mock'

const useSearchAirports = ({ query = 'London', locale = 'en-US' }) => {
  const [airports, setAirports] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query === '') return
    const searchAirports = async () => {
      setLoading(true)
      setError(null)

      const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}&locale=${locale}`

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
        const from = res?.data?.map((_) => {
          return {
            title: _.presentation.suggestionTitle,
            entityId: _.navigation.entityId,
            skyId: _.navigation.relevantFlightParams.skyId,
          }
        })
        setAirports(from)
      } catch (err: any) {
        // use mock data when error
        const from = searchPorts?.data?.map((_) => {
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

    searchAirports()
  }, [query])

  return { airports, loading, error }
}

export default useSearchAirports
