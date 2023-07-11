function solution(numbers, n) {
    
  return numbers.reduce((acc, curr) =>  acc > n ? acc : acc + curr, 0)
    
}