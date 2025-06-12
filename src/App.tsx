import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InputPage from './pages/Input/Page'
import OutputPage from './pages/Output/Page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <main className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/input" element={<InputPage />} />
            <Route path="/output" element={<OutputPage />} />
            <Route path="/" element={<InputPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
