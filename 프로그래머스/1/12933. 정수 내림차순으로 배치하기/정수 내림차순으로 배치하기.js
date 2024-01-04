function solution(n) {
    const toString = n+""
    const answer = toString.split('').sort((a,b) => b-a).join('')
    return +answer
}