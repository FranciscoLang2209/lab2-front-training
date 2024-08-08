import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <h1 className='text-2xl text-center text-blue-500'>
        <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
      </h1>
  )
}

export default App
