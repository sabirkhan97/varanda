import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VarandaStore from './page/Vaanda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <VarandaStore />
    </>
  )
}

export default App
