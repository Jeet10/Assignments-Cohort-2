import { useContext, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenNumberSelector } from "./store/atoms/count";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
        <IfEven />
      </RecoilRoot>
    </div>
  )
}

function IfEven() {
  const even = useRecoilValue(evenNumberSelector);

  
  return <div>
    {even ? "It is even" : null}
  </div>
}

function Count() {
  console.log("Rerendered")
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {

  const count = useRecoilValue(countAtom);

  return <div>
    <b>{count}</b>
  </div>
}

function Buttons() {

  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => { setCount(count => count + 1) }}>Increase</button>
    <button onClick={() => { setCount(count => count - 1) }}>Descrease</button>
  </div>
}

export default App
