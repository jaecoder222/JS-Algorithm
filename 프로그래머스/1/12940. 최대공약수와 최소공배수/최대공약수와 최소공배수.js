function solution(n, m) {
    let max
    for(let i=1;i<=Math.min(n,m);i++){
        if(Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0)
           max = i
    }
    const answer = [max, n * m / max]
    return answer
}