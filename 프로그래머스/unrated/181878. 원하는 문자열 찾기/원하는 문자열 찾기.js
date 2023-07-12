function solution(myString, pat) {
     return myString.match(new RegExp(pat, "i")) == null ? 0 : 1
}