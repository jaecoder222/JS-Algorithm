function solution(before, after) {
  let a = before.split("").sort().join("")
  let b = after.split("").sort().join("")
  if(a === b) {
      return 1;
  }else{
      return 0;
  }
}