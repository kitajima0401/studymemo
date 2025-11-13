type FormProps ={
  content: string,
  setContent: any,
  time: number | undefined,
  setTime: any,
  getTime: any
}
export default function Form({content, setContent, time, setTime, getTime}: FormProps){
  
  function isEmpty(){
    if (content.trim() === "" && time === undefined){
      return true
    }
  }
  
  return(
    <div>
      <form onSubmit={getTime}>
        <div className="contentInput">学習内容<input type="text" onChange={e=>setContent(e.target.value)}/></div>
        <div className="timeInput">勉強時間<input type="number" value={time??""} onChange={e=>setTime(Number(e.target.value))}/>時間</div>
        <div>入力されている学習内容：{content}</div>
        <div>入力されている学習時間：{time}時間</div>
        <button type="submit">登録</button>
        {isEmpty() ? 
          <div>入力されていない項目があります</div>
          : <div></div>
        }
      </form>
    </div>
  )
}


