function solution(n) {
  let threeWay = n.toString(3).split('').sort((a,b)=> -1).join('')
  return parseInt(threeWay,3)
}