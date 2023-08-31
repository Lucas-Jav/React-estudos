import { useRef, useState } from "react"
import RefExample from "./RefExamples"

export default function App() {
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variavel: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }
  return (
    <div>
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExample />
      <h2>Conhecendo o UseRef</h2>
      <hr />
      <p>Variavel: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar variavel</button>
      <button onClick={() => ref.current++}>Aumentar ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar state</button>
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}