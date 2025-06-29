import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>+1</button>
    </>
  )
}

export default App
