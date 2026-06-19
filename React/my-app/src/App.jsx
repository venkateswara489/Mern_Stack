import { useState } from 'react'

function App() {
  const [count, setCount] = useState(4)

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 5)}
        >
          Count is {count}
        </button>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
