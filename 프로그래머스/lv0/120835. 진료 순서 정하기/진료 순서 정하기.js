function solution(emergency) {
    var answer =[];
    var sortedArr = [...emergency].sort((a, b) => b - a)
    for(var i = 0; i < sortedArr.length; i++){
        answer.push(sortedArr.indexOf(emergency[i]) +1)
    }
    return answer;
}