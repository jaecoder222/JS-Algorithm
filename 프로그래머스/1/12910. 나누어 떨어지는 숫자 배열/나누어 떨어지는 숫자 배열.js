function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
       if( arr[i] % divisor === 0) {
           answer.push(arr[i])
         
       }else {
           answer.push(-1)
       }
    }
    let result = answer.filter(x => x !== -1).sort((a,b)=>a-b)
    return result.length !== 0 ? result : [-1]
}