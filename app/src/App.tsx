import { useState } from "react"
import Form from "./Conponents/Form"
import Result from "./Conponents/Result"

const App = () => {
  const [content, setContent] = useState<string>("")
  const [time, setTime] = useState<number>()
  const [result, setResult] = useState<number>(0)
  function getTime(e: any){
    e.preventDefault()
    if(time===undefined) return
    setResult(prev => prev+time)
    setContent("")
    setTime(undefined)
  }
  return(
    <div>
    <Form content={content} setContent={setContent} time={time} setTime={setTime} getTime={getTime} />
    <Result result={result} />
    </div>
  )
}

export default App