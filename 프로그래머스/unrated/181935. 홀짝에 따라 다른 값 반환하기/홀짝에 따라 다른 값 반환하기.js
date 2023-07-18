function solution(n) {
  let result = []
  
  for(let i = n; i >= 1; i = i-2){
      if(n % 2 === 1){
          result.push(i)
      }else if(n % 2 === 0) {
          result.push(i)
      }
  }
    let add = result.reduce((a,b) => a + b, 0)
    let even = result.reduce((a,b)=> a + b**2, 0)
    return result[0] % 2 === 0 ? even : add 
}