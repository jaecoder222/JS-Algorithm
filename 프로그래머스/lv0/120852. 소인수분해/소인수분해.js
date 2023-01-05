function solution(n) {
    let answer = [];

    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    
    if(n >= 2){
        answer.push(n);    
    }
    
    let result = Array.from(new Set(answer));
    
    return result.sort((a,b) => a -b);
}