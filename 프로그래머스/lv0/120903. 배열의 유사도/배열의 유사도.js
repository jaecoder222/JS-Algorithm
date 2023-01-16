function solution(s1, s2) {
    var answer = 0;
    for(const a of s1){
        if(s2.includes(a)){
            answer += 1;
        }
    }
    return answer;
}