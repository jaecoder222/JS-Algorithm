function solution(arr) {
    let answer = [];
    for(const a of arr) {
       if(a >= 50 && a % 2 === 0){
           answer.push(a / 2)
       }else if(a < 50 && a % 2 === 0){
           answer.push(a)
       }else if(a < 50 && a % 2 !== 0){
           answer.push(a * 2)
       }else {
           answer.push(a)
       }
    } 
    return answer
}