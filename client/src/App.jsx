import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";

import { Dom, HomePage } from './components'

const App = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <BrowserRouter>
      <div className="bg-[#6e96ff] w-screen h-screen flex justify-center">
        <div className="min-w-[1216px] min-h-[640px] max-w-[1200px] max-h-[624px] bg-gray-400 self-center border-8 border-white ">
          {playing 
            ? <Dom />
            : <HomePage setPlaying={setPlaying} />
          }
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App