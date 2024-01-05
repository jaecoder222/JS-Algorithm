function solution(x) {
  const toString = x+''
  const addNumber = toString.split('').map(Number).reduce((a,b)=>a+b,0)
  return x % addNumber === 0 ? true : false
}