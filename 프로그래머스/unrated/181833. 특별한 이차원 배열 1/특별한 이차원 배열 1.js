function solution(n) {
    var answer = [];
    for(let i = 0; i < n; i ++){
        let newArr =  answer.push(new Array(n).fill(0))
    }
    return answer.map((a,i) => {
       return a.map((b,j) => i === j ? 1 : b)
   })
}