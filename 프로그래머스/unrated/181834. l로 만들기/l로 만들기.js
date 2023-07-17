function solution(myString) {
   return myString.split("").map(a => a.charCodeAt() < 108 ? "l" : a).join("")
}