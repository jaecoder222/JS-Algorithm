function solution(board, k) {
    let answer = 0;
 board.forEach((x,i) => {
     x.forEach((x,j) => {
         i+j <= k ? answer += x : 0
     })
 })
   return answer
}