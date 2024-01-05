function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++){
        let slice = intStrs[i].substr(s, l)
        answer.push(slice)
    }
    return answer.map(Number).filter(x => x > k)
}