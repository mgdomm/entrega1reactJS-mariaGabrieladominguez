import React, { useState } from 'react'

const Contador = () => {

    console.log("se comienza a renderizar el contador")
    const [count, setCount] = useState(0)

    const Suma = () => {
        setCount(count + 1)
    }
    const Resta = () => {
        setCount(count - 1)
    }

  return (
    <>
        <div>Contador</div>
        <button onClick={Resta}>-</button>
        <strong>{count}</strong>
        <button onClick={Suma}>+</button>
    </>
  )
}

export default Contador