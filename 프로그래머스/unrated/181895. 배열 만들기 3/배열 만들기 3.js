function solution(arr, intervals) {
    let first = arr.slice(intervals[0][0],intervals[0][1]+1)
    let second = arr.slice(intervals[1][0], intervals[1][1]+1)
    return first.concat(second)
}