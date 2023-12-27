function solution(a, d, included) {
    let arr = [a]
    for(let i =1; i < included.length; i++){
        arr[i] = arr[i-1] + d
    }
    return arr.reduce((acc,cur,i) => included[i] ? acc+cur : acc, 0)
}