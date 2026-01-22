import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Loading...")
  const [people, setPeople] = useState([])

  useEffect(() => {
    // Fetch data from the Python backend
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message)
        setPeople(data.people)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <>
      <h1>React + Python</h1>
      <div className="card">
        <h2>{message}</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
