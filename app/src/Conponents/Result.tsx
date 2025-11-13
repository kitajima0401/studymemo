
export default function Result({result}: {result: number | undefined}){
  
  return(
    <div>
      <div>合計時間：{result}/1000 (h)</div>
    </div>
  )
}