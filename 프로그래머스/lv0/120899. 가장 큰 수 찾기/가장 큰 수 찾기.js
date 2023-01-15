function solution(array) {
    const a = Math.max(...array)
    const b = array.indexOf(a)
    return [a,b]
}