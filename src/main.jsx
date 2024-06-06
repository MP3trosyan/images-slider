import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Slider from './Slider/Slider'

const App = () => {
  return (
    <div>
      <Slider />
    </div>
  )
}
 
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
