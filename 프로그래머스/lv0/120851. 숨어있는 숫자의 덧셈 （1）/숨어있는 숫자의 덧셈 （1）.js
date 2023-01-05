function solution(my_string) {
    var answer = 0;
    var filterNum = my_string.replace(/[A-Z]/ig, "").split("").map(Number)
    for(const a of filterNum){
        answer = answer + a
    }
    return answer;
}