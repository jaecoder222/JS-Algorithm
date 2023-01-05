function solution(my_string) {
    var answer = []
    var toArr = my_string
    .replace( /[a-z]/g, "")
    .split("")
    .map(Number)
    for(const a of toArr) {
        answer.push(a)
    }
    return answer.sort()
}