export function convert(num: number) {
  let stringOrNumber: string = ""
  if(num%3=== 0 || num%5===0 || num%7===0){
    if(num%3 === 0){
      console.log("pling")
      stringOrNumber+="Pling"
    }
    if(num%5 === 0){
      stringOrNumber+="Plang"
    }
    if(num%7===0){
      stringOrNumber+="Plong"
    }
  }
  else{
    stringOrNumber = num.toString()
  }
  return stringOrNumber
}
