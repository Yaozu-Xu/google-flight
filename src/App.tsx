import React from 'react'
import './App.css'
import { FlightSearch } from './components/FlightSearch.component'
import { flight, flights } from './api/mock'
import { FlightList } from './components/FlightList.component'
import { FlightDateRange } from './components/FlightDateRange.component'

function App() {
  return (
    <div className="App">
      <FlightSearch />
      <FlightDateRange />
      <FlightList flights={flights} />
    </div>
  )
}

export default App
