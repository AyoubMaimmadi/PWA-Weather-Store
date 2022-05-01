import React from 'react'
import { fetchWeather } from './api/fetchWeather'
import './App.css'

const App = () => {
  const [query, setQuery] = React.useState('')

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
    }
  }

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default App
