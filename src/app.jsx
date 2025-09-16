import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Shiva Shankar</h1>
      <p>learning how to configure vite app with jenkins and deploy to tomcat</p>
    </>
  )
}
