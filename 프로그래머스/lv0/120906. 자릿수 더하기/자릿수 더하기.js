function solution(n) {
    let a = (n+'').split('').map(Number)
    let addNum = a.reduce((acc,curr) =>  acc + curr , 0)
    return addNum;
}