function solution(strArr) {
    let even = strArr.map((v,i) => i%2 === 0 ? v.toLowerCase() : v)
    return even.map((v,i) => i%2 !== 0 ? v.toUpperCase() : v)
}