function solution(s) {
    let item = [];
    let answer = [];
    for(let i = 0; i < s.length; i++){
        if(!item.includes(s[i])){
            answer.push(-1);
            item.push(s[i]);
            continue;
        }
        if(item.includes(s[i])){
            answer.push(item.length - item.lastIndexOf(s[i]));
            item.push(s[i]);
            continue;
        }
    }
    return answer;
}