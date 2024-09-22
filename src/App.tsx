import React, { useState } from 'react'
import './App.css'
import { FlightSearch } from './components/FlightSearch.component'
import { FlightList } from './components/FlightList.component'
import { FlightDateRange } from './components/FlightDateRange.component'
import dayjs from 'dayjs'

function App() {
  const [originSkyId, setOriginSkyId] = useState<string>('')
  const [destinationSkyId, setDestinationSkyId] = useState<string>('')
  const [originEntityId, setOriginEntityId] = useState<string>('')
  const [destinationEntityId, setDestinationEntityId] = useState<string>('')
  const [date, setDate] = useState<string>(dayjs().format('YYYY-MM-DD'))
  const [returnDate, setReturnDate] = useState<string>(dayjs().add(1, 'day').format('YYYY-MM-DD'))
  return (
    <div className="App">
      <FlightSearch
        setOriginEntityId={setOriginEntityId}
        setOriginSkyId={setOriginSkyId}
        setDestinationSkyId={setDestinationSkyId}
        setDestinationEntityId={setDestinationEntityId}
      />
      <FlightDateRange setDate={setDate} setReturnDate={setReturnDate} />
      <FlightList params={{ destinationSkyId, originSkyId, originEntityId, destinationEntityId, date, returnDate }} />
    </div>
  )
}

export default App
