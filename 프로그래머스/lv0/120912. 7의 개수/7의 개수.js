function solution(array) {
    var answer = 0;
    let spl = array.toString().split('')
    for(let i = 0; i < spl.length; i++){
        if(spl[i] === '7') {
            answer += 1
        }
    }
    return answer;
}