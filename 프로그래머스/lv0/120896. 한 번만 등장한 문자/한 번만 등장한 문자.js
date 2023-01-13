function solution(s) {
    let answer = [];
 
    let arr = s.split("")
    for(const a of arr){
        if(s.indexOf(a) === s.lastIndexOf(a)){
            answer.push(a)
        }
    }
    return answer.sort().join("")
}