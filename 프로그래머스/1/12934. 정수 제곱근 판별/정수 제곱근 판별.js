function solution(n) {
    const sqrt = Number.isInteger(Math.sqrt(n)) 
   return sqrt ? Math.pow(Math.sqrt(n)+1,2) : -1
  }
