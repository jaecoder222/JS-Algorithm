function solution(myString, pat) {
  let lastIdx = myString.lastIndexOf(pat)
  let patIdx = pat.length
  if(pat.length === 1) {
      return myString.substring(0,lastIdx + 1)
  }else {
      return  myString.substring(0,lastIdx + patIdx)
  }
}