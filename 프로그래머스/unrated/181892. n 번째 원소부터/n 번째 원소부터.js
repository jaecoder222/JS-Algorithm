function solution(num_list, n) {
    return num_list.join("").substr(n-1).split("").map(Number)
}