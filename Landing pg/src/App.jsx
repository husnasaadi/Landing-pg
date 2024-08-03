import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosec from './Landing_pg/Herosec'
import Footer from './Landing_pg/Footer'
import CardSection from './Landing_pg/Cardection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Herosec/>
<CardSection/>

    </>
  )
}

export default App
